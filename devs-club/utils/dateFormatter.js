export const formatDate = (dateString) => {
  // Return early if no date is provided
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return '';
    }
    
    // Use Intl.DateTimeFormat for consistent formatting across server and client
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
    
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}; 