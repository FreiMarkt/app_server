// Uses jQuery autotab plugin 
// - auto tabs to next field when input is full
// - filters/removes all input to specific values ig. numbers only
// http://www.mathachew.com/sandbox/jquery-autotab/

$('#date1 input').autotab_magic().autotab_filter('numeric');
$('#date1 input').datepicker()

