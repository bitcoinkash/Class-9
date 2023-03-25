const provinces = new Map()

provinces.set("QC", "Quebec");
provinces.set("BC", "British Columbia");

console.log(provinces.get("BC"))

console.log(provinces.has("QC"))   //VALIDATION FUNCTION

provinces.delete("QC")
console.log(provinces)