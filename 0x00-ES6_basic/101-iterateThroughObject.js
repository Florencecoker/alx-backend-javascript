export default function iterateThroughObject(reportWithIterator) {

 {
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
 employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };

 const report = createReportObject(employees);
 const reportWithIterator = createIteratorObject(report);
 iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
