# jquery-datepicker-lab

##### Extra Feature

You are on the `step-7` branch.  This branch has an incomplete implementation of localStorage for your consideration.

Problems with this solution:
- Currently only uses localStorage.setItem() to set key-value pairs for new dates.
- If user selects the wrong date, the first value remains in storage.
- Does not use localStorage.getItem() to retrieve stored data or display to the user.
- Does not inform user data is being stored, or give a means to clear the data.
- Value stored is a number of days but does not store reference to current date. (Data will be wrong tomorrow.)