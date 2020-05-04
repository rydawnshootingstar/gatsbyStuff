# Dev Notes:

- an error (ERROR #85901 GRAPHQL) was thrown when trying to use a Contentful space that didn't have at least 1 image uploaded to media

- if graphql queries to contentful posts don't include image urls, remove the .cache folder in your local workspace
