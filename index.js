const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playgound', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Connected to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});
const Course = mongoose.model('Course', courseSchema);

async function createCouse() {
    const course = new Course({
        name: 'Ethical hacking Course',
        author: 'Anuwat',
        tags: ['hacking', 'securirt'],
        isPublished: true
    });
    try {
        const result = await course.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function getCourses() {

    // operator
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal)
    // in (less than or equal)
    // nin ( not in )
    //--------------------------------
    // logical operator
    // or
    // and
    try {
        const course = await Course
            //.find({ author: 'Anuwat' })
            //.find({ author: /^Anuwat/i }) // regex start with
            //.find({ author: /K$/i }) // regex end with
            .find({ author: /.*An.*/ }) // regex contain
            //.find({ price: { $gt: 10, $lte: 20 } })
            //.find({ price: { $in: [10, 20, 30] } })
            //.find()
            //.or([{ author: 'Anuwat' }, { isPublished: true }])
            //.and([{ author: 'Anuwat' }, { isPublished: true }])
            //.limit(1)
            .sort({ name: 1 })
            .select({ name: 1, tags: 1 });
        console.log(course);
    } catch (error) {
        console.log(error);
    }
}

//createCouse();
getCourses();
