const express = require("express");

const router = express.Router();

let people = [
  { id: 1, name: "Bax" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Med" },
  { id: 4, name: "Fatty" },
];

// get all people & limit if specify by the user
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(people.slice(0, limit));
  } else {
    res.status(200).json(people);
  }
});

// get a single person
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({
      message: `A person with id of ${id} was not found. 
      Perhaps doesn't exist!`,
    });
  } else {
    res.status(200).json(person);
  }
});

module.exports = router;
