module.exports = (sequelize , DataTypes) => {
    const HeroSection = sequelize.define("heroSection", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT,
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

    return HeroSection;
}