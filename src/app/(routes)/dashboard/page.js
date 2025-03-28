"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/dashboard/Dashboard.module.css";
import { FaTrash, FaSpinner, FaDownload, FaSignOutAlt, FaCheckSquare, FaSquare } from "react-icons/fa";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const router = useRouter();
  const leadsPerPage = 30;

  // Calculate pagination values
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

  // Authentication check
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
      if (!isLoggedIn || isLoggedIn !== "true") {
        router.push("/AdminLogin");
        return false;
      }
      return true;
    };

    if (checkAuth()) {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, [router]);

  // Check "select all" status when leads or selection changes
  useEffect(() => {
    if (currentLeads.length > 0) {
      const allSelected = currentLeads.every(lead => 
        selectedLeads.includes(lead._id)
      );
      setSelectAll(allSelected);
    } else {
      setSelectAll(false);
    }
  }, [currentLeads, selectedLeads]);

  // Fetch leads data
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://serverbackend-0nvg.onrender.com/api/leads");

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

  // Delete a single lead
  const deleteLead = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;

    try {
      setDeleteLoading(true);
      const response = await fetch(`https://serverbackend-0nvg.onrender.com/api/leads/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setLeads((prevLeads) => prevLeads.filter((lead) => lead._id !== id));
      // If the lead was selected, remove it from selected leads
      if (selectedLeads.includes(id)) {
        setSelectedLeads(prev => prev.filter(leadId => leadId !== id));
      }
    } catch (error) {
      console.error("Error deleting lead:", error.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Delete multiple selected leads
  const deleteSelectedLeads = async () => {
    if (selectedLeads.length === 0) {
      alert("Please select at least one lead to delete");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${selectedLeads.length} selected leads?`)) return;

    setDeleteLoading(true);
    let successCount = 0;
    let errorCount = 0;

    for (const id of selectedLeads) {
      try {
        const response = await fetch(`https://serverbackend-0nvg.onrender.com/api/leads/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          successCount++;
        } else {
          errorCount++;
        }
      } catch (error) {
        console.error(`Error deleting lead ${id}:`, error.message);
        errorCount++;
      }
    }

    if (successCount > 0) {
      setLeads((prevLeads) => 
        prevLeads.filter((lead) => !selectedLeads.includes(lead._id))
      );
      setSelectedLeads([]);
      setSelectAll(false);
      alert(`Successfully deleted ${successCount} leads${errorCount > 0 ? `. Failed to delete ${errorCount} leads.` : ''}`);
    } else if (errorCount > 0) {
      alert(`Failed to delete ${errorCount} leads. Please try again.`);
    }

    setDeleteLoading(false);
  };

  // Handle selection of a single lead
  const handleSelectLead = (id) => {
    setSelectedLeads(prev => {
      if (prev.includes(id)) {
        return prev.filter(leadId => leadId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle select all leads on current page
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedLeads(prev => 
        prev.filter(id => !currentLeads.some(lead => lead._id === id))
      );
    } else {
      const currentPageIds = currentLeads.map(lead => lead._id);
      setSelectedLeads(prev => {
        // Add only ids that aren't already in the array
        const newIds = currentPageIds.filter(id => !prev.includes(id));
        return [...prev, ...newIds];
      });
    }
    setSelectAll(!selectAll);
  };

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

    const csvContent = [
      headers.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");
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

  // If not authenticated, show loading screen
  if (!isAuthenticated) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.dashboardTitle}>Contact Leads Dashboard</h2>
        <div className={styles.headerButtons}>
          <button onClick={downloadCSV} className={styles.actionButton}>
            <FaDownload /> Export CSV
          </button>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {selectedLeads.length > 0 && (
        <div className={styles.bulkActionBar}>
          <span>
            {selectedLeads.length} {selectedLeads.length === 1 ? 'lead' : 'leads'} selected
          </span>
          <button 
            onClick={deleteSelectedLeads} 
            className={styles.bulkDeleteButton}
            disabled={deleteLoading}
          >
            {deleteLoading ? <FaSpinner className={styles.spinner} /> : <FaTrash />} 
            Delete Selected
          </button>
        </div>
      )}

      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <p>Loading leads...</p>
        </div>
      ) : error ? (
        <div className={styles.errorMessage}>Error: {error}</div>
      ) : (
        <>
          <div className={styles.tableCard}>
            <div className={styles.tableResponsive}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.checkboxColumn}>
                      <div className={styles.checkboxWrapper} onClick={handleSelectAll}>
                        {selectAll ? <FaCheckSquare className={styles.checkIcon} /> : <FaSquare className={styles.checkIcon} />}
                      </div>
                    </th>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Course Name</th>
                    <th>Email ID</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLeads.length > 0 ? (
                    currentLeads.map((lead, index) => (
                      <tr key={lead._id || index}>
                        <td data-label="Select" className={styles.checkboxColumn}>
                          <div 
                            className={styles.checkboxWrapper} 
                            onClick={() => handleSelectLead(lead._id)}
                          >
                            {selectedLeads.includes(lead._id) ? 
                              <FaCheckSquare className={styles.checkIcon} /> : 
                              <FaSquare className={styles.checkIcon} />
                            }
                          </div>
                        </td>
                        <td data-label="Sr. No.">
                          {indexOfFirstLead + index + 1}
                        </td>
                        <td data-label="Name">{lead.name}</td>
                        <td data-label="Mobile Number">{lead.contact}</td>
                        <td data-label="Course Name">{lead.coursename}</td>
                        <td data-label="Email ID">{lead.email}</td>
                        <td data-label="Date">
                          {new Date(lead.createdAt).toLocaleDateString("en-US", {
                            timeZone: "UTC",
                          })}
                        </td>
                        <td data-label="Location">{lead.location}</td>
                        <td data-label="Actions">
                          <button
                            onClick={() => deleteLead(lead._id)}
                            className={styles.deleteButton}
                            disabled={deleteLoading}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className={styles.errorMessage}>
                        No leads found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.paginationControls}>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Previous
            </button>
            <span className={styles.pageIndicator}>
              Page {currentPage} of {totalPages || 1}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages || leads.length === 0}
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