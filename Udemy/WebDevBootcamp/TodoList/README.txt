ToDo List Specs

Page Markup ...

<h1>ToDo List</h1>
<ul>
    <li>"New" - Add A ToDo</li>
    <li>"List" - View All ToDo's</li>
    <li>"Delete" - Delete A Todo</li>
    <li>"Quit" - Quit</li>
</ul>


Execution Flow ...

- Until "Quit" entered by user, prompt user "What would you like to do?"
- When "Quit" entered by user, Alert("Thanks for playing ...").
- Error logging and UI when invalid choices selected.
- "New" : All todo's persist in an array, this feature adds a new todo to end of array.  Report to user after item added.
- "List" : Display index #:, (example|  0: Buy groceries), each item on 1 line, and "**********" above and below the items.
- "Delete" : Upon selection, 
-       If empty, let user know and prompt again.
-       else ...
-           display the list and prompt user for item # to delete.
-           report to user after item is deleted.
- "Delete All" : Delete's the entire list in one step.



