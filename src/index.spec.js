const context = require.context('./components', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
