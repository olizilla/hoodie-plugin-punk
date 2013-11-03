/** 
 * Hoodie server plugin
 * - Ensures the `hoodie-plugin-punk` db exists
 * - Enables public write access on `hoodie-plugin-punk`
 */
module.exports = function (hoodie, cb) {
  
  hoodie.database.add('hoodie-plugin-punk', function (err, db) {
    
    if (err && err.error === 'file_exists'){
      // punk db already exists; proceed.
      return cb();
    }

    if (err) {
      // Some other fail occured.
      return cb(err);
    }

    // dump created; let's admin party!
    db.grantPublicWriteAccess(cb);
  });
}
