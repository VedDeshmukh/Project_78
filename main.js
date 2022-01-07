var names = [
    "Hitesh Deshmukh",
    "Deval Motka",
    "Ved Deshmukh",
    "Ovee Motka",
    "Bhavana Deshmukh"
  ]
  
  var images = [
    "https://th.bing.com/th/id/R.a03da0fdd8e446edb6280d077316c3c6?rik=k0%2b9Rnx4NCaLYA&riu=http%3a%2f%2ftoonclips.com%2f600%2f55383.jpg&ehk=M0%2bpwuBfWcFhk1V%2bfgIXmQviaic3tejKebe8YgUuS9I%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.0df358f8700fb865e915f0b8277575b1?rik=gHQmf5ToFzw9gw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2070168.jpg&ehk=hsKQ1FDWsewVV9ULFyUQYlgkc4%2bMirxz3dT%2f9TSEjFw%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.a489975dbac1547a2608b5cb556ab7c5?rik=LY5UXCdXdjaAyQ&riu=http%3a%2f%2fpre00.deviantart.net%2fdb15%2fth%2fpre%2fi%2f2011%2f194%2ff%2ff%2fcute_sindhi_hindu_boy_by_azad126-d3ofzcj.jpg&ehk=ZUMhBnZYrvAwfXoNtaVtqaG2Px6rWIxxlS01vA%2fZTQU%3d&risl=&pid=ImgRaw&r=0",
    "https://st3.depositphotos.com/4216129/16145/v/450/depositphotos_161459074-stock-illustration-girl-wearing-sari-dress.jpg",
    "https://st2.depositphotos.com/3687485/11940/v/950/depositphotos_119402324-stock-illustration-vector-illustration-indian-grandma.jpg"
 ];
  
  var i = 0;
  
  function next(){
    document.getElementById("familybook").src=images[
      i];
   document.getElementById("p1").innerHTML=names[i];
    i++;
    
  }