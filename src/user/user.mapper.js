export const mapToDto = item => ({
    pseudo :  item.pseudo,
    id :  item.id,
});

export const mapFromDtoUserModel = dto => ({
    pseudo : dto.pseudo,
    email: dto.email,
    password: dto.password
});
