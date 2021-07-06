// console.log(module)

exports.getdate = function () {
      let date = new Date();


      let option = {
            day: "numeric",
            weekday: "long",
            month: "long"
      }
      return date.toLocaleDateString("en-US", option);

}

module.exports.getday = function () {
      let date = new Date();


      let option = {

            weekday: "long",

      }
      return date.toLocaleDateString("en-US", option);

}
