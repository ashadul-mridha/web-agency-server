module.exports = (sequelize , DataTypes) => {
    const AboutUs = sequelize.define("aboutus", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        listItem: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return AboutUs;
}