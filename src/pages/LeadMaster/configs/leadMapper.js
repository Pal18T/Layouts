export const leadMapper = {
    name: ["firstName", "lastName"],
    id: "lead_Id",
    email: "email",
    mobileNumber: "primaryMobile",
    createdDate: "created_date",
    allocatedDate: "allocatedDate",
    appointmentDate: "appointmentDate",
    leadStage: "leadStage",
    allocatedTo: "allocatedTo",
    leadType: "leadType",
    allocatedBy: "lead_allocated_by",
    allocatedTo: "leadOwnerId",
    getUserFullName: (user) => {
        if (!user) return 'N/A';
        // Check for both possible field name formats (firstName/lastName and first_name/last_name)
        const first = user.firstName ? user.firstName.trim() : (user.first_name ? user.first_name.trim() : '');
        const last = user.lastName ? user.lastName.trim() : (user.last_name ? user.last_name.trim() : '');
        return (first + ' ' + last).trim() || 'N/A';
    },
    getInitials: (lead) => {
        if (!lead) return 'NA';

        // Check for both possible field name formats
        const firstName = lead.firstName || lead.first_name || '';
        const lastName = lead.lastName || lead.last_name || '';
        const initials = `${firstName.toString().trim()[0] || ''}${lastName.toString().trim()[0] || ''}`;
        return initials || 'NA';
    },

    formatDate: (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString();
    }
}