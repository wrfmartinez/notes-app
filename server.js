const express = require('express');
const app = express();
const about = "At Notes, we're passionate about helping you capture your thoughts, ideas, and inspirations effortlessly. Our mission is to provide intuitive, innovative notetaking solutions that empower individuals and teams to organize, collaborate, and succeed. Whether you're a student, professional, or creative thinker, our tools are designed to adapt to your unique needs, enhancing productivity and creativity along the way. Join us on the journey to unlock the full potential of your notes, and make every moment count with Notes.";
const us = ["Innovative Technology: We pride ourselves on staying ahead of the curve, leveraging cutting-edge technology to deliver notetaking solutions that are intuitive, efficient, and reliable.", "Customizable Experience: Our platform offers a range of customization options, allowing you to tailor your notetaking experience to suit your specific preferences and workflow.", "Seamless Collaboration: Whether you're working solo or as part of a team, our tools facilitate seamless collaboration, enabling you to share, edit, and brainstorm ideas effortlessly."];

app.get('/about', (req, res) => {
  res.render('about.ejs', {
    aboutUs: about,
    whyUs: us,
  });
});

app.get('/', (req, res) => {
  res.render('home.ejs', {})
});

app.listen(3000);
