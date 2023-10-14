class ApiError extends Error
{
    // constructor
    constructor ( statusCode, message )
    {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};


module.exports = ApiError;