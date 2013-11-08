```
 _|_|_|     _|    _|   _|      _|   _|    _|  
 _|    _|   _|    _|   _|_|    _|   _|  _|    
 _|_|_|     _|    _|   _|  _|  _|   _|_|      
 _|         _|    _|   _|    _|_|   _|  _|    
 _|           _|_|     _|      _|   _|    _|  
                                             
```

hoodie-plugin-punk
==================

**Do you feel lucky?**

`hoodie install punk` gets you a global `hoodie.store` with no rules.

You can add and find things just like a regular store:

```javascript
hoodie.punk.add('junk' { omg: 'wtf', important: false });

hoodie.punk.findAll('junk') 
// returns [{ omg: 'wtf', important: false }], wrapped in a promise.
```
 
The difference is, it doesn't belong to you. Everyone can see & edit the data.

You have been warned.

## Release History
- 0.2.0 - Punk store now connects automatically on start.
- 0.1.0 - The `hoodie.punk` store has NO RULES.
