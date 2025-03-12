"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const leadsPerPage = 30;

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
      if (!isLoggedIn || isLoggedIn !== "true") {
        // Redirect to login if not authenticated
        router.push("/AdminLogin");
        return false;
      }
      return true;
    };

    // Only fetch data if authenticated
    if (checkAuth()) {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, [router]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://serverbackend-0nvg.onrender.com/api/leads"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setLeads(data.reverse());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = useMemo(
    () => Math.ceil(leads.length / leadsPerPage),
    [leads.length]
  );
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = useMemo(
    () => leads.slice(indexOfFirstLead, indexOfLastLead),
    [leads, indexOfFirstLead, indexOfLastLead]
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const downloadCSV = () => {
    if (leads.length === 0) {
      alert("No data available for download");
      return;
    }

    const headers = [
      "Name",
      "Mobile Number",
      "Course Name",
      "Email ID",
      "Location",
      "Date",
    ];
    const csvRows = leads.map((lead) => [
      lead.name,
      lead.contact,
      lead.coursename,
      lead.email,
      lead.location,
      new Date(lead.createdAt).toLocaleDateString("en-US", { timeZone: "UTC" }),
    ]);

    const csvContent = [headers.join(","), ...csvRows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/AdminLogin");
  };

  // If not authenticated, render nothing (the redirect will happen)
  if (!isAuthenticated) {
    return <div className={styles.loadingSpinner}>Checking authentication...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.dashboardTitle}>Contact Leads</h2>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
      <div className="mt-4">
        <button onClick={downloadCSV} className={styles.paginationButton}>
          Download All Contact Leads Data
        </button>
      </div>
      {loading ? (
        <div className={styles.loadingSpinner}>Loading...</div>
      ) : error ? (
        <div className={styles.errorMessage}>Error: {error}</div>
      ) : (
        <>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Course Name</th>
                  <th>Email ID</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {currentLeads.length > 0 ? (
                  currentLeads.map((lead, index) => (
                    <tr key={lead.id || index}>
                      <td>{indexOfFirstLead + index + 1}</td>
                      <td>{lead.name}</td>
                      <td>{lead.contact}</td>
                      <td>{lead.coursename}</td>
                      <td>{lead.email}</td>
                      <td>
                        {new Date(lead.createdAt).toLocaleDateString("en-US", {
                          timeZone: "UTC",
                        })}
                      </td>
                      <td>{lead.location}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className={styles.errorMessage}>
                      No leads found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className={styles.paginationControls}>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;