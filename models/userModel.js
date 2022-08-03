module.exports = (sequelize , DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userRole: {
            type: DataTypes.ENUM("user", "admin"),
            defaultValue: "user",
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return User;
}