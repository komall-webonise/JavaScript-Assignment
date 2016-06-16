console.log("hi");
var arr=[23, 44, 17, 99, 14, 15, 18, 78, 17, 44, 19, 10, 18, 12, 33, 23, 23, 23, 16, 23, 23];
var sorted_arr=arr.sort();
console.log(sorted_arr);
var result =[];
for(var i=0;i<=(arr.length)-1;i++)
{
  var l=result.length
  if(sorted_arr[i]==sorted_arr[i+1] && sorted_arr[i]!=result[l-1])
  {
//    console.log(sorted_arr[i]);
    result.push(arr[i]);
  }
}
console.log(result);
