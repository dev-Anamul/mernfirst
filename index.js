const obj = {
    fname: 'Anamul Haque',
    lname: 'Jibon',
    age: 21,
    fullName() {
        return `${this.fname} ${this.lname}`;
    },
};

console.log(obj.fullName());
