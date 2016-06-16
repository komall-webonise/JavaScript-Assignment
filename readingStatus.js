var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];   

var l=library.length;
//console.log(l);
for(var i =0;i<l;i++)
{
  console.log("****  Information about Book no."+(i+1)+"  ****\n");
  console.log("Book 's name: "+ library[i].title);
  console.log("Author 's name: "+ library[i].author);
  console.log("Reading status :"+ library[i].readingStatus+"\n");

}
