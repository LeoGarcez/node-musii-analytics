# node-musii-analytics
library that aims to make communication with spotify more transparent

## Example

```javascript
const service = require('node-musii-analytics')()
```
or
```javascript
const Service = require('node-musii-analytics')
const service = Service()
```

### methods

```javascript
service.analytics.sendAnalytics('userId', 'eventGroup', 'eventName', 'label')
```

### Return

#### success
```javascript
{
  status: ,
  data: 
}
```

#### error
```javascript
{
  status: ,
  error:
}
```
