const express = require('express');
const app = express();
const about = "At Notes, we're passionate about helping you capture your thoughts, ideas, and inspirations effortlessly. Our mission is to provide intuitive, innovative notetaking solutions that empower individuals and teams to organize, collaborate, and succeed. Whether you're a student, professional, or creative thinker, our tools are designed to adapt to your unique needs, enhancing productivity and creativity along the way. Join us on the journey to unlock the full potential of your notes, and make every moment count with Notes.";
const us = ["Innovative Technology: We pride ourselves on staying ahead of the curve, leveraging cutting-edge technology to deliver notetaking solutions that are intuitive, efficient, and reliable.", "Customizable Experience: Our platform offers a range of customization options, allowing you to tailor your notetaking experience to suit your specific preferences and workflow.", "Seamless Collaboration: Whether you're working solo or as part of a team, our tools facilitate seamless collaboration, enabling you to share, edit, and brainstorm ideas effortlessly."];
const testimonials = [
  {
    name: "Sarah Johnson",
    desc: `"I've tried numerous notetaking apps, but none have come close to the functionality and simplicity of Note's app. It's intuitive, easy to use, and has truly revolutionized the way I organize my thoughts and ideas. Highly recommend!"`
  },
  {
    name: "Michael Chang",
    desc: `"As a student, staying organized is crucial, and Note's app has been a game-changer for me. Its seamless integration across all my devices means I can access my notes anytime, anywhere, and its collaboration features have been invaluable for group projects. Thank you, Note, for making my academic life so much easier!"`
  },
  {
    name: "Emily Rodriguez",
    desc: `"I've been using Note's notetaking app for both personal and professional purposes, and I couldn't be happier with it. The ability to customize my notes to fit my workflow, coupled with its robust features like tagging and search functionality, has significantly boosted my productivity. It's a must-have tool for anyone looking to streamline their workflow and stay organized."`
  }
];

app.get('/testimonials', (req, res) => {
  res.render('testimonials.ejs', {
    testi: testimonials
  });
})

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
