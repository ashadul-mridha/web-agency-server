module.exports = (sequelize , DataTypes) => {
    const Testmonial = sequelize.define("testmonial", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        feedback: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        feedback: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN
        }
    })

    return Testmonial;
}