export class AppException extends Error {
	constructor(status, code, message) {
		super();
		this.status = status;
		this.code = code;
		this.message = message;
	}
}

export class ResourceNotFoundException extends AppException {
	constructor() {
		super(404, "RESOURCE_NOT_FOUND", "Resource not found with given parameters");
	}
}

export class CreationErrorException extends AppException {
	constructor() {
		super(400, "CREATION_ERROR", "Resource not found with given parameters, could not create crypto");
	}
}

export class UpdateErrorException extends AppException {
	constructor() {
		super(400, "UPDATE_ERROR", "Server error, error during update");
	}
}

export class UpdateUptimeException extends AppException {
	constructor(timeRemaining) {
		super(401, "UPDATE_UPTIME_EXCEPTION", "Time remaining : " + Math.ceil(timeRemaining/1000/60) + " minutes");
	}
}

export class ResourceFormatException extends AppException {
	constructor(givenItem, givenType) {
		super(400, "BAD_RESOURCE_FORMAT", givenItem + " should be a " + givenType);
	}
}


export class RoleNotAllowedException extends AppException {
	constructor() {
		super(401, "UNAUTHORIZED", "Not authorized to access this resource");
	}
}

export class BadAuthenticationTokenException extends AppException {
	constructor() {
		super(401, "TOKEN_EXPIRED", "Token expired or incorrect, please login");
	}
}

export class MissingAuthenticationTokenException extends AppException {
	constructor() {
		super(401, "BAD_PARAMETER_FORMAT", "Missing authentication token, please login");
	}
}

export class MissingCredentialsException extends AppException {
	constructor() {
		super(400, "BAD_PARAMETER_FORMAT", "Missing credentials");
	}
}

export class AuthenticationFailException extends AppException {
	constructor() {
		super(401, "BAD_PARAMETER_FORMAT", "Bad credentials");
	}
}

export class UnexpectedException extends AppException {
	constructor() {
		super(500, "UNEXPECTED_ERROR", "Unexpected error");
	}
}


export class DuplicateRessourceException extends AppException {
	constructor(givenItem) {
		super(400, "BAD_RESOURCE_FORMAT", givenItem + " already exists");
	}
}