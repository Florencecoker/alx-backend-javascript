import { taskFirst, taskNext } from './0-constants.js';
import taskBlock from './1-block-scoped.js';
import getNeighborhoodsList from './2-arrow.js';
import getSumOfHoods from './3-default-parameter.js';
import returnHowManyArguments from './4-rest-parameter.js';
import concatArrays from './5-spread-operator.js';
import getSanFranciscoDescription from './6-string-interpolation.js';
import getBudgetObject from './7-getBudgetObject.js';
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
import getFullBudgetObject from './9-getFullBudget.js';
import appendToEachArrayValue from './10-loops.js';
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
