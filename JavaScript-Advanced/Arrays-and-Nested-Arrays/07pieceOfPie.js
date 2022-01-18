function solve(array,string1,string2) {
   
    let index1 = array.indexOf(string1);
    let index2 = array.indexOf(string2);
     let result = array.slice(index1,index2+1);
    return result;


}solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')
