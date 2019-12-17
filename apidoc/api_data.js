define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/create",
    "title": "Create blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogBody",
            "description": "<p>blogBody of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of the blog passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\t\t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1BlogsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/delete",
    "title": "Delete blog by blogId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t   \n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "delete",
    "name": "PostApiV1BlogsBlogidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:blogId/edit",
    "title": "Edit blog by blogId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsBlogidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Blog Details Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Blog Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/:blogId",
    "title": "Get a single blog",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewBlogid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/author/:author",
    "title": "Get blogs by author",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>author of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blogs Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}  \t\t  \n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByAuthorAuthor"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/category/:categoryId",
    "title": "Get blogs by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blogs Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByCategoryCategoryid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/count/view",
    "title": "Increase Blogs Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Updated Successfully.\",\n\t    \"status\": 200,\n\t\t\"data\":  {\n\t\t\t\tblogId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tbodyHtml: \"string\",\n\t\t\t\tviews: number,\n\t\t\t\tisPublished: boolean,\n\t\t\t\tcategory: \"string\",\n\t\t\t\tauthor: \"string\",\n\t\t\t\ttags: object(type = array),\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "update",
    "name": "GetApiV1BlogsBlogidCountView"
  }
] });