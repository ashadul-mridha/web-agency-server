module.exports = (sequelize , DataTypes) => {
    const Service = sequelize.define("service", {
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
        serviceListItem: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return Service;
}