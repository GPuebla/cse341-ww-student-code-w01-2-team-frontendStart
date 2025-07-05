

const home = (req, res) => {
  res.send("Hello man");
};

const one = (req, res) => {
  res.send("HI MAN");
};

const two = (req, res) => {
  res.send("YOU'RE THE BEST");
};

module.exports = {
    home,
    one,
    two
}