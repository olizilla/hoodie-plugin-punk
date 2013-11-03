/**
 * Hoodie frontend plugin
 * - Adds `punk` store as a property on the `hoodie` global
 */ 
Hoodie.extend(function (hoodie) {
  hoodie.punk = hoodie.open('hoodie-plugin-punk');
});