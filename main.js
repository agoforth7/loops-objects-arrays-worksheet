var amanda = {
	firstName: 'Amanda',
	lastName: 'Harris',
	age: 42,
	gender: 'F',
	children: [
		{
			name: 'Ben',
			age: 18,
			gender: 'M'
		},
		{
			name: 'Lisa',
			age: 15,
			gender: 'F'
		}
	],
};

var brian = {
	firstName: 'Brian',
	lastName: 'Hall',
	age: 36,
	gender: 'M',
	children: [
		{
			name: 'Erica',
			age: 11,
			gender: 'F'
		},
		{
			name: 'Jenny',
			age: 8,
			gender: 'F'
		}
	],
};

var terrence = {
	firstName: 'Terrence',
	lastName: 'Smith',
	age: 49,
	gender: 'M',
	children: [
		{
			name: 'David',
			age: 17,
			gender: 'M'
		},
		{
			name: 'Alex',
			age: 23,
			gender: 'M'
		},
		{
			name: 'Joe',
			age: 25,
			gender: 'M'
		}
	],
};

var alyssa = {
	firstName: 'Alyssa',
	lastName: 'Ingram',
	age: 28,
	gender: 'F',
	children: [
		{
			name: 'Jamie',
			age: 3,
			gender: 'F'
		},
		{
			name: 'Lori',
			age: 2,
			gender: 'F'
		}
	],
};

var array = [amanda, brian, terrence, alyssa];

// 1. Add a child with a name and age to each parent.

var children;

children = amanda.children;
children[children.length] = {
		name: 'Michael',
		age: 12,
		gender: 'M'
	};

children = brian.children;
children[children.length] = {
		name: 'Flora',
		age: 9,
		gender: 'F'
	};

children = terrence.children;
children[children.length] = {
		name: 'Eliza',
		age: 14,
		gender: 'F'
	};

children = alyssa.children;
children[children.length] = {
		name: 'Bruce',
		age: 5,
		gender: 'M'
	};



// 2. Using a single for loop, increase the age of each male parent by five years.

for (var i = 0; i < array.length; i++) {
	if (array[i].gender === 'M') {
		array[i].age += 5;
	}
};

console.assert(brian.age === 41);



// 3. Using a single while loop, log the average age of all parents.

var sum = 0;
var averageAge;
var i = 0;

while (i < array.length) {
	sum += array[i].age;
	i++;
};

averageAge = sum / array.length;

console.log('The average age of all parents is ' + averageAge + '.');



// 4. Using a single loop, log each of the children's names, followed by their age and gender.

for (var i = 0; i < array.length; i++) {
	for (a = 0; a < (array[i].children.length); a++) {
		console.log(array[i].children[a].name + ' (' + array[i].children[a].age + ', ' + array[i].children[a].gender + ')');
	};
};



// 5. Using a single loop,
// Log the average age of male children.
// Log the average age of female children below the age of 12.

var boySum = 0;
var girlSum = 0;
var boyNumber = 0;
var girlNumber = 0;

for (var i = 0; i < array.length; i++) {
	for (a = 0; a < (array[i].children.length); a++) {
		if (array[i].children[a].gender === 'M') {
			boySum += array[i].children[a].age;
		} else if (array[i].children[a].gender === 'F' && array[i].children[a].age < 12) {
			girlSum += array[i].children[a].age;
		};
		if (array[i].children[a].gender === 'M') {
			boyNumber += 1;
		} else if (array[i].children[a].gender === 'F' && array[i].children[a].age < 12) {
			girlNumber += 1;
		}
	};
};

console.log('The average age of male children is ' + boySum / boyNumber + '.');
console.log('The average age of female children below the age of 12 is ' + girlSum / girlNumber + '.');