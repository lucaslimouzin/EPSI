
function validSignup(values) {
    const errors = {};

    // Check if email is valid
    if (!values.email) {
        errors.email = 'Email is required';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
    }
    // Check if nom is valid
    if (!values.nom) {
        errors.nom = 'Nom is required';
    }
    // Check if prenom is valid
    if (!values.prenom) {
        errors.prenom = 'Prenom is required';
    }
    // Check if password is valid
    if (!values.password) {
        errors.password = 'Password is required';
    }
    else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    // Check if passwordConfirm is valid
    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Password is required';
    }
    else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = 'Passwords do not match';
    }
    
    return errors;
}

export default validSignup;
