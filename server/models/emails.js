module.exports = db => ({
  async getTimes(email) {
    let results = await db("emails").where("email", email);
    return results.map(row => row.time);
  },
  async addTimes(input) {
    await db("emails").where("email", input.old_email).del();
    const insert = [];
    input.times.forEach((time) => {
      insert.push({
        time,
        email: input.new_email
      })
    })
    await db("emails").insert(insert);
  }
});