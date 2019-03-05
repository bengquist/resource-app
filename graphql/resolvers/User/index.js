import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../models/User";

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    loginUser: (root, { email, password }) => {
      return new Promise((resolve, reject) => {
        console.log("yo");
        User.findOne({ email })
          .populate()
          .exec((err, user) => {
            if (!user)
              return reject("There is no account associated with this email");

            const isValidPassword = bcrypt.compareSync(password, user.password);

            if (!isValidPassword)
              return reject("The password entered was incorrect");

            const token = jwt.sign(
              {
                id: user._id,
                email
              },
              "secret",
              { expiresIn: "1y" }
            );

            resolve({ token });
          });
      });
    },
    signupUser: (root, { email, password }) => {
      return new Promise((resolve, reject) => {
        User.findOne({ email })
          .populate()
          .exec((err, res) => {
            if (res)
              return reject("An account is already signed up with this email");

            bcrypt.hash(password, 12, (err, hash) => {
              if (err) console.log("There was an error hashing the password");

              const newUser = new User({ email, password: hash });

              return new Promise((resolve, reject) => {
                newUser.save((err, res) => {
                  err ? reject(err) : resolve(res);
                });
              });
            });
          });
      });
    },
    editUser: (root, { id, name, email }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ id }, { $set: { name, email } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
