const Data = require("../models/data");


// get all sectors
const getAllBarFilter = async (req, res) => {
    console.log(req.body.body)
    const { sector, end_year, pestle, topic, region, country } = req.body.body;
    console.log("body daatdat", sector, end_year, pestle, topic, region, country)
    let { parameter, aboutParam } = req.params
    console.log(req.params)
    if (!parameter) {
        parameter = "sector"
    }
    if (!aboutParam) {
        aboutParam = "intensity"
    }

    const matchStage = {};

    if (end_year && Array.isArray(end_year) && end_year.length > 0) {
        matchStage.end_year = { $in: end_year };
    }
    if (pestle && Array.isArray(pestle) && pestle.length > 0) {
        matchStage.pestle = { $in: pestle.map(item => new RegExp(item, 'i')) };
    }
    if (sector && Array.isArray(sector) && sector.length > 0) {
        matchStage.sector = { $in: sector.map(item => new RegExp(item, 'i')) };
    }
    if (topic && Array.isArray(topic) && topic.length > 0) {
        matchStage.topic = { $in: topic.map(item => new RegExp(item, 'i')) };
    }
    if (country && Array.isArray(country) && country.length > 0) {
        matchStage.country = { $in: country.map(item => new RegExp(item, 'i')) };
    }
    if (region && Array.isArray(region) && region.length > 0) {
        matchStage.region = { $in: region.map(item => new RegExp(item, 'i')) };
    }

    const params = "$" + parameter.toString();
    const about = "$" + aboutParam.toString();

    try {
        const aggregatedData = await Data.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: `${params}`,
                    avg: { $avg: `${about}` },

                }
            },
            {
                $project: {
                    label: "$_id",
                    data: "$avg",
                    _id: 0
                }
            }
        ]);
        console.log(aggregatedData)
        return res.status(200).json({ messaeg: "all sector retrieved", data: aggregatedData });

    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
}


const getYearPogress = async (req, res) => {
    let { parameter, aboutParam } = req.params;
    // console.log("body",req.body)
    const { sector, end_year, pestle, topic, region, country } = req.body.body;
    // console.log("body daatdat", sector, end_year, pestle, topic, region, country)


    // console.log(parameter)

    // parameter --> end_year / start_year
    // aboutParam --> intensity / likelyhood / relevance
    if (!parameter) {
        parameter = "end_year"
    }
    if (!aboutParam) {
        aboutParam = "intensity"
    }


    const matchStage = {};

    if (end_year && Array.isArray(end_year) && end_year.length > 0) {
        matchStage.end_year = { $in: end_year };
    }
    if (pestle && Array.isArray(pestle) && pestle.length > 0) {
        matchStage.pestle = { $in: pestle.map(item => new RegExp(item, 'i')) };
    }
    if (sector && Array.isArray(sector) && sector.length > 0) {
        matchStage.sector = { $in: sector.map(item => new RegExp(item, 'i')) };
    }
    if (topic && Array.isArray(topic) && topic.length > 0) {
        matchStage.topic = { $in: topic.map(item => new RegExp(item, 'i')) };
    }
    if (country && Array.isArray(country) && country.length > 0) {
        matchStage.country = { $in: country.map(item => new RegExp(item, 'i')) };
    }
    if (region && Array.isArray(region) && region.length > 0) {
        matchStage.region = { $in: region.map(item => new RegExp(item, 'i')) };
    }

    const params = "$" + parameter.toString();
    const about = "$" + aboutParam.toString();

    try {
        const aggregatedData = await Data.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: `${params}`,
                    avg: { $avg: `${about}` },

                }
            },
            {
                $project: {
                    label: "$_id",
                    data: "$avg",
                    _id: 0
                }

            },
            {
                $sort: { label: 1 } // Sort by 'data' field in descending order
            }
        ]);
        return res.status(200).json({ messaeg: "all year data retrieved", data: aggregatedData });

    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
}


const getGeoPogress = async (req, res) => {
    let { parameter, aboutParam } = req.params;
    const { sector, end_year, pestle, topic, region, country } = req.body.body;
  

    // parameter --> end_year / start_year
    // aboutParam --> intensity / likelyhood / relevance
    if (!parameter) {
        parameter = "country"
    }
    if (!aboutParam) {
        aboutParam = "intensity"
    }

    const matchStage = {};

    if (end_year && Array.isArray(end_year) && end_year.length > 0) {
        matchStage.end_year = { $in: end_year };
    }
    if (pestle && Array.isArray(pestle) && pestle.length > 0) {
        matchStage.pestle = { $in: pestle.map(item => new RegExp(item, 'i')) };
    }
    if (sector && Array.isArray(sector) && sector.length > 0) {
        matchStage.sector = { $in: sector.map(item => new RegExp(item, 'i')) };
    }
    if (topic && Array.isArray(topic) && topic.length > 0) {
        matchStage.topic = { $in: topic.map(item => new RegExp(item, 'i')) };
    }
    if (country && Array.isArray(country) && country.length > 0) {
        matchStage.country = { $in: country.map(item => new RegExp(item, 'i')) };
    }
    if (region && Array.isArray(region) && region.length > 0) {
        matchStage.region = { $in: region.map(item => new RegExp(item, 'i')) };
    }

    console.log("match", matchStage)

    const params = "$" + parameter.toString();
    const about = "$" + aboutParam.toString();

    try {
        const aggregatedData = await Data.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: `${params}`,
                    avg: { $avg: `${about}` },

                }
            },
            {
                $project: {
                    label: "$_id",
                    data: "$avg",
                    _id: 0
                }

            },
            {
                $sort: { label: 1 }, // Sort by 'data' field in descending order

            }
        ]);
        // console.log("aggregatedData", aggregatedData)
        return res.status(200).json({ messaeg: "all geo data retrieved", data: aggregatedData });

    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
}




// all topic with on. of occurence
const getAllTopic = async (req, res) => {
    try {
        const topics = await Data.find().distinct("country");
        return res.json({ message: "retrieved all topics with thier occurence count", data: topics });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'internal server error' });
    }
}


const getDataList = async (req, res) => {
    console.log("CALLEDDDD")
    const { name } = req.params;  // data list name

    try {
        const data = await Data.find().distinct(name);
        return res.status(200).json({ message: `${name}'s data list retrieved`, data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
}


const getTopData = async (req, res) => {
    let { parameter, aboutParam } = req.params;
    // console.log("body", req.body.body)
    // const { sector, end_year, pestle, topic, region, country } = req.body.body;
    // console.log("body daatat", sector, end_year, pestle, topic, region, country)
    // console.log("geo parameter ", parameter)
    // console.log("geo aboutParam ", aboutParam)

    // parameter --> end_year / start_year
    // aboutParam --> intensity / likelyhood / relevance
    if (!parameter) {
        return res.status(404).json({message:"parameter not found"})
    }
    if (!aboutParam) {
        return res.status(404).json({message:"about param not found"})
    }

    const params = "$" + parameter.toString();
    const about = "$" + aboutParam.toString();

    try {
        const aggregatedData = await Data.aggregate([
            {
                $group: {
                    _id: `${params}`,
                    avg: { $avg: `${about}` },

                }
            },
            {
                $project: {
                    label: "$_id",
                    data: "$avg",
                    _id: 0
                }

            },
            {
                $sort: { data: -1 }, // Sort by 'data' field in descending order

            },
            {
                $limit: 10 // Limit the result to 10 documents
            }
        ]);
        // console.log("aggregatedData", aggregatedData)
        return res.status(200).json({ messaeg: "all geo data retrieved", data: aggregatedData });

    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
}


module.exports = {
    getAllBarFilter,
    getYearPogress,
    getGeoPogress,
    getDataList,
    getAllTopic,
    getTopData,
}