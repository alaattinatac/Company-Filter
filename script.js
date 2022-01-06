const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


for (let i = 0; i < companies.length; i++) {
  console.log(companies[i])
}


companies.forEach(element => console.log(element.name));


companies.push({
  name: "Company Ten",
  category: "Finance",
  start: 1989,
  end: 2000,
})
console.log(companies);


let filtered = companies.filter(element => element.category === "Retail");
console.log(filtered);


let filtered2 = companies.filter(element => (element.start >= 1980 && element.start <= 1989) && (element.end >= 1980 && element.end <= 1989));
console.log(filtered2);


let filtered3 = companies.filter(element => (element.end - element.start >= 10));
console.log(filtered3);


let maped = companies.map(element => element.name + ' ' + element.start + ' ' + element.end);
console.log(maped);


companies.sort(function (a, b) {
  return a.start - b.start;
});
console.log(companies);

const reduced = companies.reduce( (sum, item) => (sum + (item.end - item.start)), 0);
console.log(reduced);