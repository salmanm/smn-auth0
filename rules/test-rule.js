function (user, context, callback) {
  if (false) {
    return callback(new Error('Some error occured'));
  }

  callback(null, user, context);
}
