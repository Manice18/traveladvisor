const data1 = [
    {
        id: 1,
        name: "Adrenaline & Extreme Tours",
        coordinates: ["12.2355", "109.19545"],
        location: "Nha Trang, Khanh Hoa Province",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/1a/07/fd/20/caption.jpg",
        numRev: "3235"
    },
    {
        id: 2,
        name: "Bars & Clubs",
        coordinates: ["12.235552", "109.1957"],
        location: "Nha Trang, Khanh Hoa Province",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/0a/80/83/3b/overview-of-above-skybar.jpg",
        numRev: "656"
    },
    {
        id: 3,
        name: "Shopping Tours",
        coordinates: ["12.23573", "109.19572"],
        location: "Nha Trang, Khanh Hoa Province",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/10/71/71/73/hoi-an-tailors.jpg",
        numRev: "20"
    },
    {
        id: 4,
        name: "Spas",
        coordinates: ["12.23573", "109.19572"],
        location: "Nha Trang, Khanh Hoa Province",
        image: "https://media-cdn.tripadvisor.com/media/photo-o/06/a4/ea/4c/cattleya-spa.jpg",
        numRev: "8516"
    }

]

const backUpSearchData = [
    {
        "place_id": 347922989,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 9381363,
        "boundingbox": [
            "22.4503235",
            "22.6325362",
            "88.2369952",
            "88.4589549"
        ],
        "lat": "22.5726459",
        "lon": "88.3638953",
        "display_name": "Kolkata, West Bengal, India",
        "class": "boundary",
        "type": "administrative",
        "importance": 0.7340385346278306,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
        "address": {
            "city": "Kolkata",
            "state": "West Bengal",
            "ISO3166-2-lvl4": "IN-WB",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 347922990,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 10371838,
        "boundingbox": [
            "22.4503235",
            "22.6325362",
            "88.2369952",
            "88.4589549"
        ],
        "lat": "22.5414185",
        "lon": "88.35769124388872",
        "display_name": "Kolkata, West Bengal, India",
        "class": "boundary",
        "type": "administrative",
        "importance": 0.5572742271829001,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
        "address": {
            "city_district": "Kolkata",
            "city": "Kolkata",
            "state": "West Bengal",
            "ISO3166-2-lvl4": "IN-WB",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 79041314,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 7630434398,
        "boundingbox": [
            "22.5962775",
            "22.6062775",
            "88.3791474",
            "88.3891474"
        ],
        "lat": "22.6012775",
        "lon": "88.3841474",
        "display_name": "Kolkata, Canal Circular Road, Ultadanga, Kolkata, West Bengal, 700067, India",
        "class": "railway",
        "type": "station",
        "importance": 0.4822771461173444,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/transport_train_station2.p.20.png",
        "address": {
            "railway": "Kolkata",
            "road": "Canal Circular Road",
            "suburb": "Ultadanga",
            "city_district": "Kolkata",
            "city": "Kolkata",
            "state": "West Bengal",
            "ISO3166-2-lvl4": "IN-WB",
            "postcode": "700067",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 190543111,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 359322727,
        "boundingbox": [
            "22.5729952",
            "22.5732797",
            "88.3646014",
            "88.3648696"
        ],
        "lat": "22.573137449999997",
        "lon": "88.36473551701067",
        "display_name": "kolkata, Surya Sen Street, Tiretta Bazaar, Baithakkhana, Kolkata, West Bengal, 700073, India",
        "class": "building",
        "type": "yes",
        "importance": 0.11000999999999997,
        "address": {
            "building": "kolkata",
            "road": "Surya Sen Street",
            "neighbourhood": "Tiretta Bazaar",
            "suburb": "Baithakkhana",
            "city_district": "Kolkata",
            "city": "Kolkata",
            "state": "West Bengal",
            "ISO3166-2-lvl4": "IN-WB",
            "postcode": "700073",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 166054217,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 244063935,
        "boundingbox": [
            "53.3403025",
            "53.340364",
            "-1.4791198",
            "-1.478927"
        ],
        "lat": "53.34032895",
        "lon": "-1.479023120746854",
        "display_name": "Kolkata, Chesterfield Road, Woodseats, Sheffield, South Yorkshire, England, S8 0SH, United Kingdom",
        "class": "building",
        "type": "retail",
        "importance": 0.10010000000000001,
        "address": {
            "building": "Kolkata",
            "road": "Chesterfield Road",
            "suburb": "Woodseats",
            "city": "Sheffield",
            "ISO3166-2-lvl8": "GB-SHF",
            "state_district": "South Yorkshire",
            "state": "England",
            "ISO3166-2-lvl4": "GB-ENG",
            "postcode": "S8 0SH",
            "country": "United Kingdom",
            "country_code": "gb"
        }
    },
    {
        "place_id": 66944119,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 6173044105,
        "boundingbox": [
            "52.0855118",
            "52.0856118",
            "-0.7272559",
            "-0.7271559"
        ],
        "lat": "52.0855618",
        "lon": "-0.7272059",
        "display_name": "Kolkata, 118-120, High Street, Green Park, Newport Pagnell, City of Milton Keynes, England, MK16 8EH, United Kingdom",
        "class": "amenity",
        "type": "fast_food",
        "importance": 0.10010000000000001,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/food_fastfood.p.20.png",
        "address": {
            "amenity": "Kolkata",
            "house_number": "118-120",
            "road": "High Street",
            "suburb": "Green Park",
            "town": "Newport Pagnell",
            "county": "City of Milton Keynes",
            "ISO3166-2-lvl6": "GB-MIK",
            "state": "England",
            "ISO3166-2-lvl4": "GB-ENG",
            "postcode": "MK16 8EH",
            "country": "United Kingdom",
            "country_code": "gb"
        }
    },
    {
        "place_id": 11108271,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 1186025286,
        "boundingbox": [
            "22.5724898",
            "22.5725898",
            "88.3523626",
            "88.3524626"
        ],
        "lat": "22.5725398",
        "lon": "88.3524126",
        "display_name": "Kolkata, Lalbazar Street, Tiretta Bazaar, B. B. D. Bagh, Kolkata, West Bengal, 700069, India",
        "class": "amenity",
        "type": "police",
        "importance": 0.10000999999999996,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/amenity_police2.p.20.png",
        "address": {
            "amenity": "Kolkata",
            "road": "Lalbazar Street",
            "neighbourhood": "Tiretta Bazaar",
            "suburb": "B. B. D. Bagh",
            "city_district": "Kolkata",
            "city": "Kolkata",
            "state": "West Bengal",
            "ISO3166-2-lvl4": "IN-WB",
            "postcode": "700069",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 22841485,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 2501401276,
        "boundingbox": [
            "35.6464669",
            "35.6465669",
            "139.623409",
            "139.623509"
        ],
        "lat": "35.6465169",
        "lon": "139.623459",
        "display_name": "Kolkata, Shiroyama-dori, Kyodo 5-chome, Setagaya, Tokyo, 155-0055, Japan",
        "class": "amenity",
        "type": "restaurant",
        "importance": 0.10000999999999996,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/food_restaurant.p.20.png",
        "address": {
            "amenity": "Kolkata",
            "road": "Shiroyama-dori",
            "neighbourhood": "Kyodo 5-chome",
            "city": "Setagaya",
            "postcode": "155-0055",
            "country": "Japan",
            "country_code": "jp"
        }
    },
    {
        "place_id": 55474936,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 4847829321,
        "boundingbox": [
            "12.9447219",
            "12.9448219",
            "77.5949085",
            "77.5950085"
        ],
        "lat": "12.9447719",
        "lon": "77.5949585",
        "display_name": "Kolkata, Dr. M H Marigowda Road, Someshwaranagar, Siddapura, South Zone, Bengaluru, Bangalore North, Bengaluru Urban District, Karnataka, 650027, India",
        "class": "amenity",
        "type": "restaurant",
        "importance": 0.10000999999999996,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/food_restaurant.p.20.png",
        "address": {
            "amenity": "Kolkata",
            "road": "Dr. M H Marigowda Road",
            "suburb": "Someshwaranagar",
            "city_district": "South Zone",
            "city": "Bengaluru",
            "county": "Bangalore North",
            "state_district": "Bengaluru Urban District",
            "state": "Karnataka",
            "ISO3166-2-lvl4": "IN-KA",
            "postcode": "650027",
            "country": "India",
            "country_code": "in"
        }
    },
    {
        "place_id": 353134388,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 1128221384,
        "boundingbox": [
            "51.6065309",
            "51.6067364",
            "-1.2454005",
            "-1.2452196"
        ],
        "lat": "51.606604250000004",
        "lon": "-1.245318849999999",
        "display_name": "Kolkata, Broadway, Old Didcot, Didcot, South Oxfordshire, Oxfordshire, England, OX11 8RS, United Kingdom",
        "class": "amenity",
        "type": "restaurant",
        "importance": 0.10000999999999996,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/food_restaurant.p.20.png",
        "address": {
            "amenity": "Kolkata",
            "road": "Broadway",
            "neighbourhood": "Old Didcot",
            "suburb": "Didcot",
            "town": "Didcot",
            "city": "South Oxfordshire",
            "county": "Oxfordshire",
            "ISO3166-2-lvl6": "GB-OXF",
            "state": "England",
            "ISO3166-2-lvl4": "GB-ENG",
            "postcode": "OX11 8RS",
            "country": "United Kingdom",
            "country_code": "gb"
        }
    }
]


const backupLocationDetails = [
    {
        "result_type": "geos",
        "result_object": {
            "location_id": "304558",
            "name": "Kolkata (Calcutta)",
            "latitude": "22.561607",
            "longitude": "88.3494",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata (Calcutta), India",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/33/fe/ac/kolkata-calcutta.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/33/fe/ac/kolkata-calcutta.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "3259",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/kolkata-calcutta.jpg",
                        "height": "920"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/ac/kolkata-calcutta.jpg",
                        "height": "155"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/33/fe/ac/kolkata-calcutta.jpg",
                        "height": "71"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2018-10-30T14:21:33-0400",
                "caption": "",
                "id": "355729068",
                "helpful_votes": "11",
                "published_date": "2018-10-30T14:21:33-0400",
                "user": null
            },
            "default_options": [
                {
                    "key": "overview",
                    "name": "Kolkata (Calcutta) Overview"
                },
                {
                    "key": "restaurants",
                    "name": "Restaurants"
                },
                {
                    "key": "things_to_do",
                    "name": "Things to Do"
                },
                {
                    "key": "lodging",
                    "name": "Hotels"
                },
                {
                    "key": "vacation_rentals",
                    "name": "Vacation Rentals"
                },
                {
                    "key": "flights_to",
                    "name": "Flights"
                }
            ],
            "geo_type": "narrow",
            "location_subtype": "none",
            "has_restaurant_coverpage": true,
            "has_attraction_coverpage": true,
            "has_curated_shopping_list": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "description": "This former British colonial stronghold boasts evidence of over two millennia of habitation, with ornate, architecturally diverse buildings, ranging from crumbing ruins to Victorian treasures. Home to lively festivals and a vibrant artistic community, clamorous markets and packed temples, this city is crowded and polluted, but ultimately invigorating.",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Kolkata District",
                    "abbrv": null,
                    "location_id": "12417686"
                },
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "India",
            "guide_count": "0"
        },
        "scope": "local"
    },
    {
        "result_type": "geos",
        "result_object": {
            "location_id": "12417686",
            "name": "Kolkata District",
            "latitude": "22.522917",
            "longitude": "88.36339",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata District, India",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/c8/d5/48/anandanagar-forest.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/c8/d5/48/anandanagar-forest.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1632",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/c8/d5/48/anandanagar-forest.jpg",
                        "height": "920"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/c8/d5/48/anandanagar-forest.jpg",
                        "height": "310"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/c8/d5/48/anandanagar-forest.jpg",
                        "height": "141"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2015-12-17T09:30:44-0500",
                "caption": "Anandanagar Forest",
                "id": "164156744",
                "helpful_votes": "3",
                "published_date": "2015-12-17T09:30:44-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "default_options": [
                {
                    "key": "overview",
                    "name": "Kolkata District Overview"
                },
                {
                    "key": "restaurants",
                    "name": "Restaurants"
                },
                {
                    "key": "things_to_do",
                    "name": "Things to Do"
                },
                {
                    "key": "lodging",
                    "name": "Hotels"
                },
                {
                    "key": "vacation_rentals",
                    "name": "Vacation Rentals"
                },
                {
                    "key": "flights_to",
                    "name": "Flights"
                }
            ],
            "geo_type": "narrow",
            "location_subtype": "none",
            "has_restaurant_coverpage": false,
            "has_attraction_coverpage": true,
            "has_curated_shopping_list": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "description": "",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "India",
            "guide_count": "0"
        },
        "scope": "local"
    },
    {
        "result_type": "lodging",
        "result_object": {
            "location_id": "302163",
            "name": "Taj Bengal Kolkata",
            "latitude": "22.537663",
            "longitude": "88.33412",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata (Calcutta), India",
            "is_closed": false,
            "is_long_closed": false,
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/07/da/12/facade.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/07/da/12/facade.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "5364",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/07/da/12/facade.jpg",
                        "height": "3756"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/07/da/12/facade.jpg",
                        "height": "385"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/07/da/12/facade.jpg",
                        "height": "175"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2023-05-07T23:03:38-0400",
                "caption": "Facade",
                "id": "688380434",
                "helpful_votes": "0",
                "published_date": "2023-05-07T23:03:38-0400",
                "user": null
            },
            "address": "34 - B Belvedere Rd",
            "location_subtype": "none",
            "has_restaurant_coverpage": false,
            "has_attraction_coverpage": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Kolkata (Calcutta)",
                    "abbrv": null,
                    "location_id": "304558"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Kolkata District",
                    "abbrv": null,
                    "location_id": "12417686"
                },
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "Kolkata (Calcutta)",
            "guide_count": "0"
        },
        "scope": "local"
    },
    {
        "result_type": "lodging",
        "result_object": {
            "location_id": "17378938",
            "name": "ITC Royal Bengal, a Luxury Collection Hotel, Kolkata",
            "latitude": "22.545887",
            "longitude": "88.39755",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata (Calcutta), India",
            "is_closed": false,
            "is_long_closed": false,
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/5b/e9/b2/itc-royal-bengal.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/5b/e9/b2/itc-royal-bengal.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "4000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/5b/e9/b2/itc-royal-bengal.jpg",
                        "height": "2667"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/5b/e9/b2/itc-royal-bengal.jpg",
                        "height": "367"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/5b/e9/b2/itc-royal-bengal.jpg",
                        "height": "167"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2023-06-01T21:51:05-0400",
                "caption": "ITC Royal Bengal",
                "id": "693889458",
                "helpful_votes": "0",
                "published_date": "2023-06-01T21:51:05-0400",
                "user": null
            },
            "address": "1 Jbs Haldane Avenue",
            "location_subtype": "none",
            "has_restaurant_coverpage": false,
            "has_attraction_coverpage": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Kolkata (Calcutta)",
                    "abbrv": null,
                    "location_id": "304558"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Kolkata District",
                    "abbrv": null,
                    "location_id": "12417686"
                },
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "Kolkata (Calcutta)",
            "guide_count": "0"
        },
        "scope": "local"
    },
    {
        "result_type": "restaurants",
        "result_object": {
            "location_id": "25215545",
            "name": "Kolkata, India",
            "latitude": "22.488571",
            "longitude": "88.40507",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata (Calcutta), India",
            "is_closed": false,
            "is_long_closed": false,
            "address": "4 No. Mukundapur, Kolkata",
            "location_subtype": "none",
            "has_restaurant_coverpage": false,
            "has_attraction_coverpage": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Kolkata (Calcutta)",
                    "abbrv": null,
                    "location_id": "304558"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Kolkata District",
                    "abbrv": null,
                    "location_id": "12417686"
                },
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "Kolkata (Calcutta)",
            "guide_count": "0"
        },
        "scope": "local"
    },
    {
        "result_type": "lodging",
        "result_object": {
            "location_id": "307348",
            "name": "Hyatt Regency Kolkata",
            "latitude": "22.570557",
            "longitude": "88.405304",
            "timezone": "Asia/Kolkata",
            "location_string": "Kolkata (Calcutta), India",
            "is_closed": false,
            "is_long_closed": false,
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/28/e9/2f/ec/outdoor.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/28/e9/2f/ec/outdoor.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2732",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/28/e9/2f/ec/outdoor.jpg",
                        "height": "1820"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/28/e9/2f/ec/outdoor.jpg",
                        "height": "366"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/28/e9/2f/ec/outdoor.jpg",
                        "height": "167"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2023-04-24T07:15:41-0400",
                "caption": "Outdoor",
                "id": "686370796",
                "helpful_votes": "0",
                "published_date": "2023-04-24T07:15:41-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "address": "JA - 1 Sector III",
            "location_subtype": "none",
            "has_restaurant_coverpage": false,
            "has_attraction_coverpage": false,
            "show_address": false,
            "preferred_map_engine": "default",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Kolkata (Calcutta)",
                    "abbrv": null,
                    "location_id": "304558"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Kolkata District",
                    "abbrv": null,
                    "location_id": "12417686"
                },
                {
                    "subcategory": [
                        {
                            "key": "state",
                            "name": "State"
                        }
                    ],
                    "name": "West Bengal",
                    "abbrv": null,
                    "location_id": "297692"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "parent_display_name": "Kolkata (Calcutta)",
            "guide_count": "0"
        },
        "scope": "local"
    }

]

const backUpAttractions =
    [
        {
            "location_id": "26337970",
            "name": "Chennai public aquarium",
            "latitude": "13.086713",
            "longitude": "80.286385",
            "num_reviews": "0",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "distance": "0.0",
            "distance_string": "0 m",
            "bearing": "north",
            "is_closed": false,
            "open_now_text": "Closed today",
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d26337970-Reviews-Chennai_public_aquarium-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d26337970-Chennai_public_aquarium-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "48",
                    "name": "Zoos & Aquariums"
                },
                {
                    "key": "57",
                    "name": "Nature & Parks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                null
            ],
            "address_obj": {
                "street1": "36GR+G9J, Chetpet Lake, New Bupathy Nagar, Chetpet",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600031"
            },
            "address": "36GR+G9J, Chetpet Lake, New Bupathy Nagar, Chetpet, Chennai (Madras) 600031 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ],
                    [],
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 660,
                            "close_time": 1170
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "119",
                    "name": "Aquariums"
                }
            ],
            "animal_welfare_tag": {
                "tag_text": "Features Animals",
                "msg_header": "This attraction features animals",
                "msg_body": "Click below for expert advice on animal welfare in tourism.",
                "learn_more_text": "Learn more",
                "education_portal_url": "https://www.tripadvisor.com/blog/animal-welfare-education-portal/"
            },
            "tags": {
                "animal_welfare_tag": {
                    "tag_text": "Features Animals",
                    "msg_header": "This attraction features animals",
                    "msg_body": "Click below for expert advice on animal welfare in tourism.",
                    "learn_more_text": "Learn more",
                    "education_portal_url": "https://www.tripadvisor.com/blog/animal-welfare-education-portal/"
                }
            }
        },
        {
            "location_id": "0",
            "name": "Spas",
            "latitude": "13.086713",
            "longitude": "80.286385",
            "num_reviews": "46",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/7e/4c/ef/estetica-avanzada-y-quiromasaj.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/7e/4c/ef/estetica-avanzada-y-quiromasaj.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/7e/4c/ef/estetica-avanzada-y-quiromasaj.jpg",
                        "height": "1000"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/7e/4c/ef/estetica-avanzada-y-quiromasaj.jpg",
                        "height": "430"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/27/7e/4c/ef/estetica-avanzada-y-quiromasaj.jpg",
                        "height": "195"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-12-20T07:37:47-0500",
                "caption": "estética avanzada y quiromasaje Vicky Martín",
                "id": "662588655",
                "helpful_votes": "0",
                "published_date": "2022-12-20T07:37:47-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "0.0",
            "distance_string": null,
            "bearing": "north",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "40",
                    "name": "Spas & Wellness"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "IT Expressway",
                "street2": "11th floor, opp.Elcot sez",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600119"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "127",
                    "name": "Spas"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 25
        },
        {
            "location_id": "0",
            "name": "Movie Theaters",
            "latitude": "13.086713",
            "longitude": "80.286385",
            "num_reviews": "8",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/14/20/b6/93/screen.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/14/20/b6/93/screen.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/20/b6/93/screen.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/14/20/b6/93/screen.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/14/20/b6/93/screen.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-08-13T23:48:24-0400",
                "caption": "Screen",
                "id": "337688211",
                "helpful_votes": "12",
                "published_date": "2018-08-13T23:48:24-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "0.0",
            "distance_string": null,
            "bearing": "north",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "56",
                    "name": "Fun & Games"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Aerohub, Airport complex, Chennai airport",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "97",
                    "name": "Movie Theaters"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 8
        },
        {
            "location_id": "17839095",
            "name": "Thol Isai Kalanjiyam",
            "latitude": "13.085833",
            "longitude": "80.28397",
            "num_reviews": "2",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/18/f4/6b/9f/thol-isai-kalanjiyam.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/18/f4/6b/9f/thol-isai-kalanjiyam.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/18/f4/6b/9f/thol-isai-kalanjiyam.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/18/f4/6b/9f/thol-isai-kalanjiyam.jpg",
                        "height": "682"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/18/f4/6b/9f/thol-isai-kalanjiyam.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2019-08-26T06:45:45-0400",
                "caption": "",
                "id": "418671519",
                "helpful_votes": "3",
                "published_date": "2019-08-26T06:45:45-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.7811524868011475",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "187",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#187 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#187 of 419 things to do in Chennai (Madras)",
            "ranking": "#187 of 419 things to do in Chennai (Madras)",
            "distance": "0.27910962385288",
            "distance_string": "0.3 km",
            "bearing": "west",
            "rating": "5.0",
            "is_closed": false,
            "open_now_text": "Closed Now",
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "‘Thol Isai Kalanjiyam’ is a museum of ancient musical instruments. It has a collection of 80 instruments, some obsolete and many still in Vogue. The display includes classical concert instruments, folk instruments and temple instruments. The Museum was inaugurated on17th February 2019 by his Excellency the Governor of Tamil Nadu. The Museum provides in depth information about the instruments in addition to portraying the history of the Tamil Isai Sangam. Thol Isai Kalanjiyam is a valuable resource for music students and an eye opener for every visitor.",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d17839095-Reviews-Thol_Isai_Kalanjiyam-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d17839095-Thol_Isai_Kalanjiyam-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "49",
                    "name": "Museums"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "777519529",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=777519529#review777519529",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Extraordinary:)",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 94430 60416",
            "website": "http://www.tamilisaisangam.in",
            "email": "drlakshmipodhuval@gmail.com",
            "address_obj": {
                "street1": "No.5, Esplanade Road, Raja Annamalai Mandram",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600108"
            },
            "address": "No.5, Esplanade Road, Raja Annamalai Mandram, Chennai (Madras) 600108 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ],
                    [],
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 600,
                            "close_time": 1020
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "28",
                    "name": "Art Museums"
                }
            ]
        },
        {
            "location_id": "8720387",
            "name": "Parry's Corner",
            "latitude": "13.08863",
            "longitude": "80.28808",
            "num_reviews": "169",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/98/c0/97/photo1jpg.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/98/c0/97/photo1jpg.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2048",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/98/c0/97/photo1jpg.jpg",
                        "height": "2048"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-p/11/98/c0/97/photo1jpg.jpg",
                        "height": "550"
                    },
                    "medium": {
                        "width": "450",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/98/c0/97/photo1jpg.jpg",
                        "height": "450"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2017-12-26T12:22:15-0500",
                "caption": "",
                "id": "295223447",
                "helpful_votes": "1",
                "published_date": "2017-12-26T12:22:15-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.304091453552246",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "41",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#41 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#41 of 419 things to do in Chennai (Madras)",
            "ranking": "#41 of 419 things to do in Chennai (Madras)",
            "distance": "0.2814700073125489",
            "distance_string": "0.3 km",
            "bearing": "northeast",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d8720387-Reviews-Parry_s_Corner-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d8720387-Parry_s_Corner-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                },
                {
                    "key": "51",
                    "name": "Other"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "746609342",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=746609342#review746609342",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Resemblance of Old World",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "NSC Bose Road",
                "street2": "Intersection of North Beach Road",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "NSC Bose Road Intersection of North Beach Road, Chennai (Madras) India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "34",
                    "name": "Neighborhoods"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-Day-out-in-Chennai-by-Auto-rickshaw%2Fd4624-50182P751%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=70ff6f15646c3d94f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=8720387&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$1.12",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-Day-out-in-Chennai-by-Auto-rickshaw%2Fd4624-50182P751%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=70ff6f15646c3d94f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=8720387&clt=TM&from=api&nt=true",
                        "price": "$112.00",
                        "rounded_up_price": "$112",
                        "offer_type": "",
                        "title": "Private Day out in Chennai by Auto-rickshaw",
                        "product_code": "50182P751",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/03/50/6d.jpg",
                        "description": null,
                        "primary_category": "Half-day Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FChennai-Shore-Excursion-Full-Day-Private-Chennai-Guided-City-Tour%2Fd4624-8173P52%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=055bd32c295fb68a7&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=8720387&clt=TM&from=api&nt=true",
                        "price": "$152.00",
                        "rounded_up_price": "$152",
                        "offer_type": "",
                        "title": "Chennai Shore Excursion - Full Day Private Chennai Guided Tour",
                        "product_code": "8173P52",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/28/52/ea.jpg",
                        "description": null,
                        "primary_category": "Ports of Call Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "11750496",
            "name": "Victory War Memorial",
            "latitude": "13.08433",
            "longitude": "80.28905",
            "num_reviews": "35",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/f1/27/e2/victory-war-memorial.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/f1/27/e2/victory-war-memorial.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2048",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/f1/27/e2/victory-war-memorial.jpg",
                        "height": "1536"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/f1/27/e2/victory-war-memorial.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/f1/27/e2/victory-war-memorial.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2017-07-19T06:23:46-0400",
                "caption": "Victory War Memorial stands in Stark Memory to 1000s of fallen soldiers of Madras Presidency who",
                "id": "267462626",
                "helpful_votes": "1",
                "published_date": "2017-07-19T06:23:46-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.9670982360839844",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "77",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#77 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#77 of 419 things to do in Chennai (Madras)",
            "ranking": "#77 of 419 things to do in Chennai (Madras)",
            "distance": "0.3920071796110432",
            "distance_string": "0.4 km",
            "bearing": "southeast",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d11750496-Reviews-Victory_War_Memorial-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d11750496-Victory_War_Memorial-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "711422625",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=711422625#review711422625",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "A tribute to martyrs",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": null,
                "street2": "South of Fort St. George",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600009"
            },
            "address": "South of Fort St. George, Chennai (Madras) 600009 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "163",
                    "name": "Points of Interest & Landmarks"
                },
                {
                    "key": "26",
                    "name": "Monuments & Statues"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=11750496&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.09",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=11750496&clt=TM&from=api&nt=true",
                        "price": "$9.00",
                        "rounded_up_price": "$9",
                        "offer_type": "",
                        "title": "Chennai Self-Guided Audio Tour",
                        "product_code": "18568P50",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/e0/bf/80.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FBritish-Architecture-Walk-in-Chennai%2Fd4624-18983P29%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=29296af9333e1c146&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=11750496&clt=TM&from=api&nt=true",
                        "price": "$45.00",
                        "rounded_up_price": "$45",
                        "offer_type": "",
                        "title": "Chennai's British Small-Group Architecture Walk",
                        "product_code": "18983P29",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/9b/fa.jpg",
                        "description": null,
                        "primary_category": "City Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FNight-walk-Tour-Chennai%2Fd4624-73045P186%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e386de79ae98f6873&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=11750496&clt=TM&from=api&nt=true",
                        "price": "$15.00",
                        "rounded_up_price": "$15",
                        "offer_type": "",
                        "title": "Private Chennai By Night Walking Tour",
                        "product_code": "73045P186",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/5b/73/38.jpg",
                        "description": null,
                        "primary_category": "Half-day Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FStory-of-Chennai-through-British-Buildings%2Fd4624-122623P5%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=d063c70264168ec49&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=11750496&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "Story of Chennai through British Buildings",
                        "product_code": "122623P5",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/fe/fa/61.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FNight-Walking-Tour-of-Chennai%2Fd4624-189829P19%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=0a6186c261595140f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=11750496&clt=TM&from=api&nt=true",
                        "price": "$26.25",
                        "rounded_up_price": "$27",
                        "offer_type": "",
                        "title": "Night Walking Tour of Chennai",
                        "product_code": "189829P19",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/87/99/ac.jpg",
                        "description": null,
                        "primary_category": "Walking Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "304556",
            "ad_position": "inline1",
            "ad_size": "8X8",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "0",
            "name": "Taxis & Shuttles",
            "latitude": "13.08933",
            "longitude": "80.28882",
            "num_reviews": "3181",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/71/d4/af/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/71/d4/af/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/17/71/d4/af/caption.jpg",
                        "height": "768"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/71/d4/af/caption.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/17/71/d4/af/caption.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2019-05-08T07:36:52-0400",
                "caption": "",
                "id": "393335983",
                "helpful_votes": "1",
                "published_date": "2019-05-08T07:36:52-0400",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "0.39297722341157987",
            "distance_string": null,
            "bearing": "northeast",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "59",
                    "name": "Transportation"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "1st Floor No 171 Linghi Chetty Street",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600001"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "182",
                    "name": "Taxis & Shuttles"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 11
        },
        {
            "location_id": "8739081",
            "name": "Immaiyil Nanmai Tharuvar Temple",
            "latitude": "13.0833",
            "longitude": "80.2833",
            "num_reviews": "17",
            "timezone": "Asia/Kolkata",
            "location_string": "Madurai, Madurai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/1e/b0/7a/front-look-of-the-entrance.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/1e/b0/7a/front-look-of-the-entrance.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/1e/b0/7a/front-look-of-the-entrance.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/1e/b0/7a/front-look-of-the-entrance.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/1e/b0/7a/front-look-of-the-entrance.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2018-10-21T20:32:19-0400",
                "caption": "Front look of the entrance",
                "id": "354332794",
                "helpful_votes": "3",
                "published_date": "2018-10-21T20:32:19-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu",
            "preferred_map_engine": "default",
            "raw_ranking": "2.886759042739868",
            "ranking_geo": "Madurai",
            "ranking_geo_id": "297677",
            "ranking_position": "19",
            "ranking_denominator": "45",
            "ranking_category": "attraction",
            "ranking_subcategory": "#19 of 45 things to do in Madurai",
            "subcategory_ranking": "#19 of 45 things to do in Madurai",
            "ranking": "#19 of 45 things to do in Madurai",
            "distance": "0.5059141765145957",
            "distance_string": "0.5 km",
            "bearing": "southwest",
            "rating": "4.5",
            "is_closed": false,
            "open_now_text": "Closed Now",
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g297677-d8739081-Reviews-Immaiyil_Nanmai_Tharuvar_Temple-Madurai_Madurai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g297677-d8739081-Immaiyil_Nanmai_Tharuvar_Temple-Madurai_Madurai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Madurai",
                    "abbrv": null,
                    "location_id": "297677"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Madurai District",
                    "abbrv": null,
                    "location_id": "12417646"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Madurai",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "784707193",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=784707193#review784707193",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Divine experience..",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Chinnakadai Area",
                "street2": null,
                "city": "Madurai",
                "state": null,
                "country": "India",
                "postalcode": "625001"
            },
            "address": "Chinnakadai Area, Madurai 625001 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 720
                        },
                        {
                            "open_time": 990,
                            "close_time": 1170
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "1837967",
            "name": "Rockfort Temple",
            "latitude": "13.0833",
            "longitude": "80.2833",
            "num_reviews": "75",
            "timezone": "Asia/Kolkata",
            "location_string": "Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/db/ed/b0/rockfort-ucchi-pillayar.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/db/ed/b0/rockfort-ucchi-pillayar.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/db/ed/b0/rockfort-ucchi-pillayar.jpg",
                        "height": "1500"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/db/ed/b0/rockfort-ucchi-pillayar.jpg",
                        "height": "412"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/05/db/ed/b0/rockfort-ucchi-pillayar.jpg",
                        "height": "187"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2014-05-13T11:36:44-0400",
                "caption": "Le Rockfort Tempel à Trichy",
                "id": "98299312",
                "helpful_votes": "1",
                "published_date": "2014-05-13T11:36:44-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu",
            "preferred_map_engine": "default",
            "raw_ranking": "3.3139796257019043",
            "ranking_geo": "Tamil Nadu",
            "ranking_geo_id": "297674",
            "ranking_position": "210",
            "ranking_denominator": "1849",
            "ranking_category": "attraction",
            "ranking_subcategory": "#210 of 1,849 things to do in Tamil Nadu",
            "subcategory_ranking": "#210 of 1,849 things to do in Tamil Nadu",
            "ranking": "#210 of 1,849 things to do in Tamil Nadu",
            "distance": "0.5059141765145957",
            "distance_string": "0.5 km",
            "bearing": "southwest",
            "rating": "4.5",
            "is_closed": false,
            "open_now_text": "Closed Now",
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g297674-d1837967-Reviews-Rockfort_Temple-Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g297674-d1837967-Rockfort_Temple-Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Tamil Nadu",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "705244595",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=705244595#review705244595",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Nice place to visit Vinayagar",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 431 270 4621",
            "website": "http://www.trichyrockfort.tnhrce.in/",
            "address_obj": {
                "street1": "Tiruchi",
                "street2": "",
                "city": null,
                "state": null,
                "country": "India",
                "postalcode": "620002"
            },
            "address": "Tiruchi, 620002 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ],
                    [
                        {
                            "open_time": 390,
                            "close_time": 1200
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "3",
                    "name": "Architectural Buildings"
                }
            ]
        },
        {
            "location_id": "12183269",
            "name": "Thiruvidaikazhi Murugan Temple",
            "latitude": "13.0833",
            "longitude": "80.2833",
            "num_reviews": "1",
            "timezone": "Asia/Kolkata",
            "location_string": "Nagapattinam, Nagapattinam District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/4e/33/05/another-sthala-purana.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/4e/33/05/another-sthala-purana.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "640",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/17/4e/33/05/another-sthala-purana.jpg",
                        "height": "480"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/4e/33/05/another-sthala-purana.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/17/4e/33/05/another-sthala-purana.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2019-04-26T23:54:05-0400",
                "caption": "Another sthala purana of this temple is that, this is believed to be the place where Devaiyani was betrothed to Lord Muruga. In a way of emphasizing this, you can notice that the idol of Devaiyani in her sannidhi will seem to be slightly tilted towards the direction of Lord Muruga.(Obviously of Shyness !!)Also, if you keenly observe the Gopuram of the temple, you can notice that it illustrates many of the stories from Kanda Puranam.",
                "id": "391000837",
                "helpful_votes": "3",
                "published_date": "2019-04-26T23:54:05-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu",
            "preferred_map_engine": "default",
            "raw_ranking": "2.7486178874969482",
            "ranking_geo": "Nagapattinam",
            "ranking_geo_id": "297678",
            "ranking_position": "26",
            "ranking_denominator": "36",
            "ranking_category": "attraction",
            "ranking_subcategory": "#26 of 36 things to do in Nagapattinam",
            "subcategory_ranking": "#26 of 36 things to do in Nagapattinam",
            "ranking": "#26 of 36 things to do in Nagapattinam",
            "distance": "0.5059141765145957",
            "distance_string": "0.5 km",
            "bearing": "southwest",
            "rating": "5.0",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g297678-d12183269-Reviews-Thiruvidaikazhi_Murugan_Temple-Nagapattinam_Nagapattinam_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g297678-d12183269-Thiruvidaikazhi_Murugan_Temple-Nagapattinam_Nagapattinam_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Nagapattinam",
                    "abbrv": null,
                    "location_id": "297678"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Nagapattinam District",
                    "abbrv": null,
                    "location_id": "12417652"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Nagapattinam",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                null
            ],
            "address_obj": {
                "street1": "Temple Road",
                "street2": null,
                "city": "Nagapattinam",
                "state": null,
                "country": "India",
                "postalcode": "609310"
            },
            "address": "Temple Road, Nagapattinam 609310 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "3705329",
            "name": "Krishnapuram Anchaneyar Temple",
            "latitude": "13.0833",
            "longitude": "80.2833",
            "num_reviews": "32",
            "timezone": "Asia/Kolkata",
            "location_string": "Tirunelveli, Tirunelveli District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/06/fc/11/97/krishnapuram-temple.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/fc/11/97/krishnapuram-temple.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/fc/11/97/krishnapuram-temple.jpg",
                        "height": "1500"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/fc/11/97/krishnapuram-temple.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/06/fc/11/97/krishnapuram-temple.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2014-12-01T01:59:00-0500",
                "caption": "KRISHNAPURAM TEMPLE VIEW FROM THE OUTSIDE",
                "id": "117182871",
                "helpful_votes": "7",
                "published_date": "2014-12-03T07:01:34-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu",
            "preferred_map_engine": "default",
            "raw_ranking": "3.0048811435699463",
            "ranking_geo": "Tirunelveli",
            "ranking_geo_id": "1584851",
            "ranking_position": "5",
            "ranking_denominator": "49",
            "ranking_category": "attraction",
            "ranking_subcategory": "#5 of 49 things to do in Tirunelveli",
            "subcategory_ranking": "#5 of 49 things to do in Tirunelveli",
            "ranking": "#5 of 49 things to do in Tirunelveli",
            "distance": "0.5059141765145957",
            "distance_string": "0.5 km",
            "bearing": "southwest",
            "rating": "4.5",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g1584851-d3705329-Reviews-Krishnapuram_Anchaneyar_Temple-Tirunelveli_Tirunelveli_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g1584851-d3705329-Krishnapuram_Anchaneyar_Temple-Tirunelveli_Tirunelveli_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Tirunelveli",
                    "abbrv": null,
                    "location_id": "1584851"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Tirunelveli District",
                    "abbrv": null,
                    "location_id": "12417848"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Tirunelveli",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "637632094",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=637632094#review637632094",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Divine anchient beautifull",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Krishnapuram",
                "street2": null,
                "city": "Tirunelveli",
                "state": null,
                "country": "India",
                "postalcode": "627751"
            },
            "address": "Krishnapuram, Tirunelveli 627751 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "2697605",
            "name": "Burma Bazaar",
            "latitude": "13.08972",
            "longitude": "80.29082",
            "num_reviews": "59",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/02/77/71/2c/burma-bazaar.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/02/77/71/2c/burma-bazaar.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "606",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/02/77/71/2c/burma-bazaar.jpg",
                        "height": "480"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/02/77/71/2c/burma-bazaar.jpg",
                        "height": "435"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/02/77/71/2c/burma-bazaar.jpg",
                        "height": "198"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2012-05-11T16:31:22-0400",
                "caption": "Burma Bazaar",
                "id": "41382188",
                "helpful_votes": "7",
                "published_date": "2012-05-11T16:31:22-0400",
                "user": null
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.8649280071258545",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "103",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#103 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#103 of 419 things to do in Chennai (Madras)",
            "ranking": "#103 of 419 things to do in Chennai (Madras)",
            "distance": "0.5855718059182449",
            "distance_string": "0.6 km",
            "bearing": "northeast",
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "An interest in foreign-made goodies started the formerly popular market Burma Bazaar, a treasure house for DVDs, perfumes and tech products. Though the market is lackluster now, it still makes for a good walk to see if you might find something interesting from across the borders.",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d2697605-Reviews-Burma_Bazaar-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d2697605-Burma_Bazaar-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "546944432",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=546944432#review546944432",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Market",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "website": "http://www.dailyneeddelivery.com",
            "address_obj": {
                "street1": "Parrys Corner, Chennai Port",
                "street2": "Mannady",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600001"
            },
            "address": "Parrys Corner, Chennai Port Mannady, Chennai (Madras) 600001 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "142",
                    "name": "Flea & Street Markets"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FMagical-Chennai-Markets-Tour%2Fd4624-73045P184%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=643685f87931b4b7e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2697605&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.20",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FMagical-Chennai-Markets-Tour%2Fd4624-73045P184%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=643685f87931b4b7e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2697605&clt=TM&from=api&nt=true",
                        "price": "$17.66",
                        "rounded_up_price": "$18",
                        "offer_type": "",
                        "title": "Magical Chennai Markets Tour",
                        "product_code": "73045P184",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/ff/ea/a6.jpg",
                        "description": null,
                        "primary_category": "City Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FShopping-and-Bazaar-trail-in-Chennai%2Fd4624-18983P76%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=3a97fe5dac1b6af53&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=2697605&clt=TM&from=api&nt=true",
                        "price": "$90.00",
                        "rounded_up_price": "$90",
                        "offer_type": "",
                        "title": "Chennai Shopping Tour",
                        "product_code": "18983P76",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/9c/a0.jpg",
                        "description": null,
                        "primary_category": "Shopping Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FChennai-Full-Day-Guided-Tour-in-a-Private-Car%2Fd4624-189829P16%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a19a9c4790e4ac70e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=2697605&clt=TM&from=api&nt=true",
                        "price": "$106.26",
                        "rounded_up_price": "$107",
                        "offer_type": "",
                        "title": "Chennai Full Day Guided Tour in a Private Car",
                        "product_code": "189829P16",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/85/dc/71.jpg",
                        "description": null,
                        "primary_category": "Bus & Minivan Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FChennai-Full-Day-Sightseeing-in-a-Private-Car%2Fd4624-189829P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=0378415f02d36055b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=2697605&clt=TM&from=api&nt=true",
                        "price": "$81.26",
                        "rounded_up_price": "$82",
                        "offer_type": "",
                        "title": "Chennai Full Day Sightseeing in a Private Car",
                        "product_code": "189829P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/5c/eb/58.jpg",
                        "description": null,
                        "primary_category": "Bus & Minivan Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "3202840",
            "name": "Fort Museum",
            "latitude": "13.080461",
            "longitude": "80.28775",
            "num_reviews": "164",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/1d/f1/47/fort-museum.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/1d/f1/47/fort-museum.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/1d/f1/47/fort-museum.jpg",
                        "height": "1333"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/05/1d/f1/47/fort-museum.jpg",
                        "height": "682"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/1d/f1/47/fort-museum.jpg",
                        "height": "366"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2013-12-08T11:02:29-0500",
                "caption": "View of the Museum from the outside",
                "id": "85848391",
                "helpful_votes": "3",
                "published_date": "2013-12-08T11:02:29-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.0300185680389404",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "67",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#67 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#67 of 419 things to do in Chennai (Madras)",
            "ranking": "#67 of 419 things to do in Chennai (Madras)",
            "distance": "0.7114232871665506",
            "distance_string": "0.7 km",
            "bearing": "south",
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d3202840-Reviews-Fort_Museum-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d3202840-Fort_Museum-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "49",
                    "name": "Museums"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "752985000",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=752985000#review752985000",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Quaint little Museum",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 44 2567 1127",
            "website": "http://asi.nic.in/asi_museums_chennai.asp",
            "address_obj": {
                "street1": "Fort St. George",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600 009"
            },
            "address": "Fort St. George, Chennai (Madras) 600 009 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "161",
                    "name": "Specialty Museums"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=3202840&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.09",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=3202840&clt=TM&from=api&nt=true",
                        "price": "$9.00",
                        "rounded_up_price": "$9",
                        "offer_type": "",
                        "title": "Chennai Self-Guided Audio Tour",
                        "product_code": "18568P50",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/e0/bf/80.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-Tour-Half-Day-Chennai-Sightseeing-with-Government-Museum-and-Kapaleeshwar-Temple%2Fd4624-5353MAAPVTCITY%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=996ea5505955c529c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=3202840&clt=TM&from=api&nt=true",
                        "price": "$78.00",
                        "rounded_up_price": "$78",
                        "offer_type": "",
                        "title": "Chennai Private Tour: Kapaleeshwar Temple, Government Museum",
                        "product_code": "5353MAAPVTCITY",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6e/eb/ed.jpg",
                        "description": null,
                        "primary_category": "Half-day Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "0",
            "name": "Gift & Specialty Shops",
            "latitude": "13.09214",
            "longitude": "80.29047",
            "num_reviews": "105",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/00/e9/31/chennai-based-souvenir.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/00/e9/31/chennai-based-souvenir.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/00/e9/31/chennai-based-souvenir.jpg",
                        "height": "848"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/00/e9/31/chennai-based-souvenir.jpg",
                        "height": "678"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/00/e9/31/chennai-based-souvenir.jpg",
                        "height": "364"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-10-11T02:35:54-0400",
                "caption": "Chennai based souvenir store, With Tshirts,  Mugs, Coasters, Mouse pads & Bags ",
                "id": "352381233",
                "helpful_votes": "2",
                "published_date": "2018-10-11T02:35:54-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "0.748761986475952",
            "distance_string": null,
            "bearing": "northeast",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "15, Moore Street, Parrys",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "144",
                    "name": "Gift & Specialty Shops"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$90.55",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            },
            "rollup_count": 38
        },
        {
            "location_id": "304556",
            "ad_position": "inline2",
            "ad_size": "8X8",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "12424987",
            "name": "St.Antony Church , Armenien Street",
            "latitude": "13.09377",
            "longitude": "80.28851",
            "num_reviews": "0",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "distance": "0.8186237251268139",
            "distance_string": "0.8 km",
            "bearing": "north",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d12424987-Reviews-St_Antony_Church_Armenien_Street-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d12424987-St_Antony_Church_Armenien_Street-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                null
            ],
            "phone": "+91 44 2538 4848",
            "website": "http://stantonyshrine.org/",
            "address_obj": {
                "street1": "Armenian Street",
                "street2": "Broadway/Parrys Corner area",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600001"
            },
            "address": "Armenian Street Broadway/Parrys Corner area, Chennai (Madras) 600001 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                },
                {
                    "key": "175",
                    "name": "Churches & Cathedrals"
                }
            ]
        },
        {
            "location_id": "8089762",
            "name": "Chennai Central Railway Station",
            "latitude": "13.08232",
            "longitude": "80.28017",
            "num_reviews": "509",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/af/42/b1/central-railway-station.jpg",
                        "height": "141"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/af/42/b1/central-railway-station.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/af/42/b1/central-railway-station.jpg",
                        "height": "720"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/af/42/b1/central-railway-station.jpg",
                        "height": "576"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/af/42/b1/central-railway-station.jpg",
                        "height": "309"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2018-12-11T04:13:23-0500",
                "caption": "#central_railway_station #chennai #lightup_at_night",
                "id": "363807409",
                "helpful_votes": "12",
                "published_date": "2018-12-11T04:13:23-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.5969958305358887",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "28",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#28 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#28 of 419 things to do in Chennai (Madras)",
            "ranking": "#28 of 419 things to do in Chennai (Madras)",
            "distance": "0.8326817761200546",
            "distance_string": "0.8 km",
            "bearing": "southwest",
            "rating": "4.0",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d8089762-Reviews-Chennai_Central_Railway_Station-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d8089762-Chennai_Central_Railway_Station-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "735065140",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=735065140#review735065140",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Chennai The Best City Always",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "044-25357780",
            "website": "https://erail.in/info/chennai-central-railway-station-MAS/24406",
            "address_obj": {
                "street1": "General Hospital Rd",
                "street2": "Kannappar Thidal, Periyamet",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600003"
            },
            "address": "General Hospital Rd Kannappar Thidal, Periyamet, Chennai (Madras) 600003 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "163",
                    "name": "Points of Interest & Landmarks"
                },
                {
                    "key": "3",
                    "name": "Architectural Buildings"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=8089762&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$6.25",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FLocal-Tour-of-Heritage-and-Architectural-Buildings-in-Chennai%2Fd4624-18568P50%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f953bc2763115e59c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=8089762&clt=TM&from=api&nt=true",
                        "price": "$9.00",
                        "rounded_up_price": "$9",
                        "offer_type": "",
                        "title": "Chennai Self-Guided Audio Tour",
                        "product_code": "18568P50",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/e0/bf/80.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-Day-out-in-Chennai-by-Auto-rickshaw%2Fd4624-50182P751%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=70ff6f15646c3d94f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=8089762&clt=TM&from=api&nt=true",
                        "price": "$112.00",
                        "rounded_up_price": "$112",
                        "offer_type": "",
                        "title": "Private Day out in Chennai by Auto-rickshaw",
                        "product_code": "50182P751",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/03/50/6d.jpg",
                        "description": null,
                        "primary_category": "Half-day Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FBritish-Architecture-Walk-in-Chennai%2Fd4624-18983P29%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=29296af9333e1c146&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=8089762&clt=TM&from=api&nt=true",
                        "price": "$45.00",
                        "rounded_up_price": "$45",
                        "offer_type": "",
                        "title": "Chennai's British Small-Group Architecture Walk",
                        "product_code": "18983P29",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/9b/fa.jpg",
                        "description": null,
                        "primary_category": "City Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FStory-of-Chennai-through-British-Buildings%2Fd4624-122623P5%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=d063c70264168ec49&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=8089762&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "Story of Chennai through British Buildings",
                        "product_code": "122623P5",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/fe/fa/61.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FChennai-Shore-Excursion-Full-Day-Private-Chennai-Guided-City-Tour%2Fd4624-8173P52%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=055bd32c295fb68a7&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=8089762&clt=TM&from=api&nt=true",
                        "price": "$152.00",
                        "rounded_up_price": "$152",
                        "offer_type": "",
                        "title": "Chennai Shore Excursion - Full Day Private Chennai Guided Tour",
                        "product_code": "8173P52",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/28/52/ea.jpg",
                        "description": null,
                        "primary_category": "Ports of Call Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "2475766",
            "name": "Sowcarpet",
            "latitude": "13.090878",
            "longitude": "80.27967",
            "num_reviews": "59",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "137",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/02/ec/11/fc/not-very-dirty-place.jpg",
                        "height": "205"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/02/ec/11/fc/not-very-dirty-place.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "302",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/02/ec/11/fc/not-very-dirty-place.jpg",
                        "height": "450"
                    },
                    "large": {
                        "width": "302",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/02/ec/11/fc/not-very-dirty-place.jpg",
                        "height": "450"
                    },
                    "medium": {
                        "width": "302",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/02/ec/11/fc/not-very-dirty-place.jpg",
                        "height": "450"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2012-09-30T10:05:48-0400",
                "caption": "Not very dirty place but little. Get different items at sufficiently low cost.",
                "id": "49025532",
                "helpful_votes": "30",
                "published_date": "2012-09-30T10:05:48-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.937077045440674",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "80",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#80 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#80 of 419 things to do in Chennai (Madras)",
            "ranking": "#80 of 419 things to do in Chennai (Madras)",
            "distance": "0.8628704598380628",
            "distance_string": "0.9 km",
            "bearing": "northwest",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d2475766-Reviews-Sowcarpet-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d2475766-Sowcarpet-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                },
                {
                    "key": "51",
                    "name": "Other"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "686391878",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=686391878#review686391878",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Market place",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 83769 20005",
            "address_obj": {
                "street1": "",
                "street2": "",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": ""
            },
            "address": "Chennai (Madras) India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "34",
                    "name": "Neighborhoods"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FUnlimited-Guided-Food-tour-in-the-Sowcarpet-Market-by-Wonder-tours%2Fd4624-107256P5%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f4859d9a537e6c61b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2475766&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$17.66",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FUnlimited-Guided-Food-tour-in-the-Sowcarpet-Market-by-Wonder-tours%2Fd4624-107256P5%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=f4859d9a537e6c61b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2475766&clt=TM&from=api&nt=true",
                        "price": "$35.00",
                        "rounded_up_price": "$35",
                        "offer_type": "",
                        "title": "Sowcarpet Market Food Tour",
                        "product_code": "107256P5",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/82/f7/2f.jpg",
                        "description": null,
                        "primary_category": "Bus & Minivan Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-The-Georgetown-Bazaar-Walk-by-Wonder-tours%2Fd4624-107256P12%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e9fe6b3eda2f2e4c8&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=2475766&clt=TM&from=api&nt=true",
                        "price": "$37.72",
                        "rounded_up_price": "$38",
                        "offer_type": "",
                        "title": "Georgetown Bazaar Private Walking Tour",
                        "product_code": "107256P12",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/44/a6/87.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FThe-Georgetown-Bazaar-Walk-by-Wonder-tours%2Fd4624-107256P7%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=5afc4a8c7effbbc2b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=2475766&clt=TM&from=api&nt=true",
                        "price": "$25.00",
                        "rounded_up_price": "$25",
                        "offer_type": "",
                        "title": "The Georgetown Bazaar Walking tour ",
                        "product_code": "107256P7",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/17/2a/01.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FBazaar-walking-tour-in-George-town%2Fd4624-107256P24%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=0ca180775806ecc8a&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=2475766&clt=TM&from=api&nt=true",
                        "price": "$25.00",
                        "rounded_up_price": "$25",
                        "offer_type": "",
                        "title": "Bazaar Walking tour in George Town",
                        "product_code": "107256P24",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/74/38/55.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FPrivate-Food-Trail-in-Sowcarpet-Market-by-Wonder-tours%2Fd4624-107256P26%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=b6747f7aefbbc87de&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=2475766&clt=TM&from=api&nt=true",
                        "price": "$37.05",
                        "rounded_up_price": "$38",
                        "offer_type": "",
                        "title": "Private Food Trail in Sowcarpet Market by Wonder tours",
                        "product_code": "107256P26",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/fd/f3/60.jpg",
                        "description": null,
                        "primary_category": "Bus & Minivan Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "6104999",
            "name": "Hatke Gifts",
            "latitude": "13.0894",
            "longitude": "80.27891",
            "num_reviews": "2",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.7486026287078857",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "350",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#350 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#350 of 419 things to do in Chennai (Madras)",
            "ranking": "#350 of 419 things to do in Chennai (Madras)",
            "distance": "0.8639422930554845",
            "distance_string": "0.9 km",
            "bearing": "west",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d6104999-Reviews-Hatke_Gifts-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d6104999-Hatke_Gifts-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "492677017",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=492677017#review492677017",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Apt name for the shop.....",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 98844 42900",
            "address_obj": {
                "street1": "#204, Mint Street, Park Town",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "#204, Mint Street, Park Town, Chennai (Madras) India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "137",
                    "name": "Antique Stores"
                }
            ]
        },
        {
            "location_id": "14927428",
            "name": "Chinna Kadai Mariamman Temple",
            "latitude": "13.08554",
            "longitude": "80.27825",
            "num_reviews": "3",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.776312828063965",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "199",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#199 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#199 of 419 things to do in Chennai (Madras)",
            "ranking": "#199 of 419 things to do in Chennai (Madras)",
            "distance": "0.8912625574138316",
            "distance_string": "0.9 km",
            "bearing": "west",
            "rating": "4.5",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d14927428-Reviews-Chinna_Kadai_Mariamman_Temple-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d14927428-Chinna_Kadai_Mariamman_Temple-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "753018552",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=753018552#review753018552",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Kadai Mariamman temple",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Mint Street",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600003"
            },
            "address": "Mint Street, Chennai (Madras) 600003 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "16708456",
            "name": "Sri Muthukumaraswamy Temple",
            "latitude": "13.08434",
            "longitude": "80.27816",
            "num_reviews": "0",
            "timezone": "Asia/Kolkata",
            "location_string": "Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu",
            "preferred_map_engine": "default",
            "distance": "0.9298619702206615",
            "distance_string": "0.9 km",
            "bearing": "west",
            "is_closed": false,
            "open_now_text": "Closed Now",
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g297674-d16708456-Reviews-Sri_Muthukumaraswamy_Temple-Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g297674-d16708456-Sri_Muthukumaraswamy_Temple-Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Tamil Nadu",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                null
            ],
            "address_obj": {
                "street1": "Arulmigu Muthukumaraswamy Tirukkoil",
                "street2": null,
                "city": null,
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "Arulmigu Muthukumaraswamy Tirukkoil India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ],
                    [
                        {
                            "open_time": 360,
                            "close_time": 810
                        },
                        {
                            "open_time": 960,
                            "close_time": 1140
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "2697597",
            "name": "Armenian Church",
            "latitude": "13.0949",
            "longitude": "80.28879",
            "num_reviews": "120",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/8e/14/9d/armenian-church.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/8e/14/9d/armenian-church.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1632",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/8e/14/9d/armenian-church.jpg",
                        "height": "1224"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/8e/14/9d/armenian-church.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0d/8e/14/9d/armenian-church.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2016-11-07T09:29:34-0500",
                "caption": "Armenian Church",
                "id": "227415197",
                "helpful_votes": "0",
                "published_date": "2016-11-07T09:29:34-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.3843517303466797",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "39",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#39 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#39 of 419 things to do in Chennai (Madras)",
            "ranking": "#39 of 419 things to do in Chennai (Madras)",
            "distance": "0.947716037176063",
            "distance_string": "0.9 km",
            "bearing": "north",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d2697597-Reviews-Armenian_Church-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d2697597-Armenian_Church-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "742246072",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=742246072#review742246072",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Chennai's oldest church",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "+91 98402 50249",
            "website": "http://www.armeniancollege.edu.in/st-mary-armenian-church-of-madras-2",
            "address_obj": {
                "street1": "Armenian Street",
                "street2": "Parrys",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600001"
            },
            "address": "Armenian Street Parrys, Chennai (Madras) 600001 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "175",
                    "name": "Churches & Cathedrals"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FThe-founding-of-Chennai-at-Georgetown-a-heritage-walk%2Fd4624-122623P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=453abc011720dc1f8&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2697597&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.35",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FThe-founding-of-Chennai-at-Georgetown-a-heritage-walk%2Fd4624-122623P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=453abc011720dc1f8&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2697597&clt=TM&from=api&nt=true",
                        "price": "$35.00",
                        "rounded_up_price": "$35",
                        "offer_type": "",
                        "title": "Georgetown heritage walking tour in Chennai about the founding of Chennai",
                        "product_code": "122623P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/10/49/6e/27.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            }
        },
        {
            "location_id": "0",
            "name": "Paint & Pottery Studios",
            "latitude": "13.091705",
            "longitude": "80.27874",
            "num_reviews": "1",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/1c/36/e8/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/1c/36/e8/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1200",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/1c/36/e8/caption.jpg",
                        "height": "800"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/1c/36/e8/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/1c/36/e8/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2019-11-23T08:14:28-0500",
                "caption": "",
                "id": "438056680",
                "helpful_votes": "0",
                "published_date": "2019-11-23T08:14:28-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "0.9977422080126129",
            "distance_string": null,
            "bearing": "northwest",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "56",
                    "name": "Fun & Games"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "No:8, Chinna Naicken St, 2nd Floor, Near Kakada Ramprasad Sweets and Chaats, Sowcarpet, George Town, Chennai, Tamil Nadu 600079",
                "street2": "Near Kakada Ramprasad Sweets and Chaats",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600079"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "272",
                    "name": "Paint & Pottery Studios"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 1
        },
        {
            "location_id": "304556",
            "ad_position": "inline3",
            "ad_size": "8X8",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "1837837",
            "name": "Anderson Church",
            "latitude": "13.096342",
            "longitude": "80.286514",
            "num_reviews": "3",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "146",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/01/98/62/41/chennai.jpg",
                        "height": "205"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/98/62/41/chennai.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "321",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/98/62/41/chennai.jpg",
                        "height": "450"
                    },
                    "large": {
                        "width": "321",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/98/62/41/chennai.jpg",
                        "height": "450"
                    },
                    "medium": {
                        "width": "321",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/98/62/41/chennai.jpg",
                        "height": "450"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2010-07-26T02:44:38-0400",
                "caption": "Anderson Church",
                "id": "26763841",
                "helpful_votes": "1",
                "published_date": "2010-07-28T16:21:35-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.7552945613861084",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "280",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#280 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#280 of 419 things to do in Chennai (Madras)",
            "ranking": "#280 of 419 things to do in Chennai (Madras)",
            "distance": "1.0717800178426382",
            "distance_string": "1.1 km",
            "bearing": "north",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d1837837-Reviews-Anderson_Church-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d1837837-Anderson_Church-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "379897550",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=379897550#review379897550",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Oldest church in Parry..!!!",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "phone": "25351097",
            "address_obj": {
                "street1": "Broadway",
                "street2": "",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600 108"
            },
            "address": "Broadway, Chennai (Madras) 600 108 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "11855340",
            "name": "Sri Santhana Srinivasa Perumal Temple",
            "latitude": "13.09194",
            "longitude": "80.27805",
            "num_reviews": "5",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/e1/0e/7b/srinivasa-perumal-temple.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/e1/0e/7b/srinivasa-perumal-temple.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/19/e1/0e/7b/srinivasa-perumal-temple.jpg",
                        "height": "1365"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-p/19/e1/0e/7b/srinivasa-perumal-temple.jpg",
                        "height": "733"
                    },
                    "medium": {
                        "width": "338",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/e1/0e/7b/srinivasa-perumal-temple.jpg",
                        "height": "450"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2019-10-31T08:37:06-0400",
                "caption": "Srinivasa Perumal Temple",
                "id": "434179707",
                "helpful_votes": "1",
                "published_date": "2019-10-31T08:37:06-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.809978723526001",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "151",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#151 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#151 of 419 things to do in Chennai (Madras)",
            "ranking": "#151 of 419 things to do in Chennai (Madras)",
            "distance": "1.0742885563366609",
            "distance_string": "1.1 km",
            "bearing": "northwest",
            "rating": "4.5",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d11855340-Reviews-Sri_Santhana_Srinivasa_Perumal_Temple-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d11855340-Sri_Santhana_Srinivasa_Perumal_Temple-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "722777045",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=722777045#review722777045",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Clean and well maintained",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Semmancheri",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600119"
            },
            "address": "Semmancheri, Chennai (Madras) 600119 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ]
        },
        {
            "location_id": "0",
            "name": "Cooking Classes",
            "latitude": "13.09194",
            "longitude": "80.27805",
            "num_reviews": "2",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/24/9e/a3/authenticook.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/24/9e/a3/authenticook.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/24/9e/a3/authenticook.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/24/9e/a3/authenticook.jpg",
                        "height": "412"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/24/9e/a3/authenticook.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-10-24T08:02:31-0400",
                "caption": "",
                "id": "354721443",
                "helpful_votes": "0",
                "published_date": "2018-10-24T08:02:31-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "1.0742885563366609",
            "distance_string": null,
            "bearing": "northwest",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "36",
                    "name": "Food & Drink"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "203",
                    "name": "Cooking Classes"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 3
        },
        {
            "location_id": "12726591",
            "name": "Anna Flyover",
            "latitude": "13.09194",
            "longitude": "80.27805",
            "num_reviews": "5",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "2.7148561477661133",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "398",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#398 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#398 of 419 things to do in Chennai (Madras)",
            "ranking": "#398 of 419 things to do in Chennai (Madras)",
            "distance": "1.0742885563366609",
            "distance_string": "1.1 km",
            "bearing": "northwest",
            "rating": "3.0",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d12726591-Reviews-Anna_Flyover-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d12726591-Anna_Flyover-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "580999602",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=580999602#review580999602",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Oldest flyover in chennai",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Anna Salal",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600006"
            },
            "address": "Anna Salal, Chennai (Madras) 600006 India",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ]
                ],
                "timezone": "Asia/Kolkata"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "5",
                    "name": "Bridges"
                }
            ]
        },
        {
            "location_id": "0",
            "name": "Game & Entertainment Centers",
            "latitude": "13.09194",
            "longitude": "80.27805",
            "num_reviews": "91",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/f8/5e/53/hallo.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/f8/5e/53/hallo.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/f8/5e/53/hallo.jpg",
                        "height": "474"
                    },
                    "large": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/f8/5e/53/hallo.jpg",
                        "height": "474"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/f8/5e/53/hallo.jpg",
                        "height": "204"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2021-05-13T05:59:49-0400",
                "caption": "Hallo",
                "id": "486039123",
                "helpful_votes": "0",
                "published_date": "2021-05-13T05:59:49-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "1.0742885563366609",
            "distance_string": null,
            "bearing": "northwest",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "56",
                    "name": "Fun & Games"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "No.145/6, NM Road",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "110",
                    "name": "Game & Entertainment Centers"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 9
        },
        {
            "location_id": "8431476",
            "name": "Pondy Bazaar",
            "latitude": "13.09194",
            "longitude": "80.27805",
            "num_reviews": "161",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0c/1d/08/a7/old-shady-trees-along.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0c/1d/08/a7/old-shady-trees-along.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0c/1d/08/a7/old-shady-trees-along.jpg",
                        "height": "1500"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0c/1d/08/a7/old-shady-trees-along.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0c/1d/08/a7/old-shady-trees-along.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2016-07-22T02:42:40-0400",
                "caption": "Old shady trees along the road",
                "id": "203229351",
                "helpful_votes": "3",
                "published_date": "2016-07-22T02:42:40-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.5792813301086426",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "30",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#30 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#30 of 419 things to do in Chennai (Madras)",
            "ranking": "#30 of 419 things to do in Chennai (Madras)",
            "distance": "1.0742885563366609",
            "distance_string": "1.1 km",
            "bearing": "northwest",
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "neighborhood_info": [
                {
                    "location_id": "13087516",
                    "name": "George Town/Parry’s Corner"
                }
            ],
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d8431476-Reviews-Pondy_Bazaar-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d8431476-Pondy_Bazaar-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                },
                {
                    "key": "51",
                    "name": "Other"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "612616975",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "5",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=612616975#review612616975",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "All in one place",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Thyagaraya Road",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600017"
            },
            "address": "Thyagaraya Road, Chennai (Madras) 600017 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "34",
                    "name": "Neighborhoods"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FBig-Fat-Indian-Wedding-a-wedding-shopping-walk-in-Chennai%2Fd4624-122623P4%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=8e331226967aff41b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=8431476&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.35",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FChennai%2FBig-Fat-Indian-Wedding-a-wedding-shopping-walk-in-Chennai%2Fd4624-122623P4%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=8e331226967aff41b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=8431476&clt=TM&from=api&nt=true",
                        "price": "$35.00",
                        "rounded_up_price": "$35",
                        "offer_type": "",
                        "title": "Chennai South Indian Wedding Shopping Tour",
                        "product_code": "122623P4",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/11/8b/d8/df.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            }
        },
        {
            "location_id": "2697601",
            "name": "Breezy Beach",
            "latitude": "13.0925",
            "longitude": "80.29444",
            "num_reviews": "62",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0b/ad/96/a7/thiruvanmiyur-beach.jpg",
                        "height": "141"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0b/ad/96/a7/thiruvanmiyur-beach.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/ad/96/a7/thiruvanmiyur-beach.jpg",
                        "height": "720"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/0b/ad/96/a7/thiruvanmiyur-beach.jpg",
                        "height": "576"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0b/ad/96/a7/thiruvanmiyur-beach.jpg",
                        "height": "309"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2016-06-20T12:55:19-0400",
                "caption": "Thiruvanmiyur beach",
                "id": "195925671",
                "helpful_votes": "4",
                "published_date": "2016-06-20T12:55:19-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "preferred_map_engine": "default",
            "raw_ranking": "3.12139892578125",
            "ranking_geo": "Chennai (Madras)",
            "ranking_geo_id": "304556",
            "ranking_position": "51",
            "ranking_denominator": "419",
            "ranking_category": "attraction",
            "ranking_subcategory": "#51 of 419 things to do in Chennai (Madras)",
            "subcategory_ranking": "#51 of 419 things to do in Chennai (Madras)",
            "ranking": "#51 of 419 things to do in Chennai (Madras)",
            "distance": "1.0851601964418207",
            "distance_string": "1.1 km",
            "bearing": "northeast",
            "rating": "4.5",
            "is_closed": false,
            "is_long_closed": false,
            "ride_providers": [
                "olaCabs"
            ],
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g304556-d2697601-Reviews-Breezy_Beach-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g304556-d2697601-Breezy_Beach-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "57",
                    "name": "Nature & Parks"
                },
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "reviews": [
                {
                    "id": "746916233",
                    "lang": null,
                    "location_id": "0",
                    "published_date": "2023-07-25T10:56:37-04:00",
                    "published_platform": "Desktop",
                    "rating": "4",
                    "type": "review",
                    "helpful_votes": "0",
                    "url": "https://www.tripadvisor.com/ShowUserReviews?src=746916233#review746916233",
                    "travel_date": null,
                    "text": null,
                    "user": null,
                    "title": "Less Crowded and Peaceful",
                    "owner_response": null,
                    "subratings": [],
                    "machine_translated": false,
                    "machine_translatable": false
                }
            ],
            "address_obj": {
                "street1": "Valmiki Nagar",
                "street2": "",
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600041"
            },
            "address": "Valmiki Nagar, Chennai (Madras) 600041 India",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "52",
                    "name": "Beaches"
                }
            ]
        },
        {
            "location_id": "0",
            "name": "Cultural Tours",
            "latitude": "13.08982",
            "longitude": "80.27596",
            "num_reviews": "145",
            "timezone": "Asia/Kolkata",
            "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/e9/d4/37/photo0jpg.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/e9/d4/37/photo0jpg.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/e9/d4/37/photo0jpg.jpg",
                        "height": "1280"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-p/16/e9/d4/37/photo0jpg.jpg",
                        "height": "550"
                    },
                    "medium": {
                        "width": "450",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/e9/d4/37/photo0jpg.jpg",
                        "height": "450"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2019-03-23T09:55:05-0400",
                "caption": "",
                "id": "384422967",
                "helpful_votes": "0",
                "published_date": "2019-03-23T09:55:05-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.india.tamil_nadu.chennai",
            "distance": "1.1814959083832082",
            "distance_string": null,
            "bearing": "west",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Chennai (Madras)",
                    "abbrv": null,
                    "location_id": "304556"
                },
                {
                    "subcategory": [
                        {
                            "key": "district",
                            "name": "District"
                        }
                    ],
                    "name": "Chennai District",
                    "abbrv": null,
                    "location_id": "10745344"
                },
                {
                    "subcategory": [
                        {
                            "key": "region",
                            "name": "Region"
                        }
                    ],
                    "name": "Tamil Nadu",
                    "abbrv": null,
                    "location_id": "297674"
                },
                {
                    "subcategory": [
                        {
                            "key": "country",
                            "name": "Country"
                        }
                    ],
                    "name": "India",
                    "abbrv": null,
                    "location_id": "293860"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "42",
                    "name": "Tours"
                }
            ],
            "parent_display_name": "Chennai (Madras)",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Chennai",
                "street2": null,
                "city": "Chennai (Madras)",
                "state": null,
                "country": "India",
                "postalcode": "600003"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "225",
                    "name": "Cultural Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$9.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 6
        }
    ]

const hotelBackup = [

    {
        "location_id": "13814626",
        "name": "Novotel Chennai Chamiers Road",
        "latitude": "13.029826",
        "longitude": "80.244354",
        "num_reviews": "1451",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/d9/90/76/exterior-view.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/d9/90/76/exterior-view.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1c/d9/90/76/exterior-view.jpg",
                    "height": "768"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/d9/90/76/exterior-view.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/d9/90/76/exterior-view.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-04-12T05:47:52-0400",
            "caption": "Exterior view",
            "id": "484020342",
            "helpful_votes": "0",
            "published_date": "2021-04-12T05:47:52-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.870632648468018",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "1",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#1 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.848075251606682",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$86 - $102",
        "neighborhood_info": [
            {
                "location_id": "21002056",
                "name": "Alwarpet South"
            }
        ],
        "hac_offers": {
            "availability": "available",
            "offers": [
                {
                    "content_id": "131847010",
                    "provider_display_name": "Novotel",
                    "internal_provider_name": "Accor",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/novotel.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "available",
                    "display_style": "premium",
                    "pay_at_stay_message": "No prepayment needed",
                    "display_price": "$93",
                    "display_price_int": "93",
                    "link": "https://www.tripadvisor.com/Commerce?p=Accor&src=131847010&geo=13814626&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=15&silo=6622&bucket=903795&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=-6RrdF15NAQgsObrNb2MCt7eUbbgvil02sIXz7L6DokrGAf8xEHaziKMsacZ4pIPPeQ5EfBlS_OwpD9rqbReFKiZ3EdkoU-hJ9gcEeeIeH3kPPZgRig9FIL6BOCFTXNRZbE4K7_3xL3V4YJ1BZdNKQ8QxX7qy8kBy10hHLG3Yi6zmBKtRSHk6UlBOPVB7XPD3HK1nIDsmqwixk8vVt0ysgIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&priceShown=93&pm=BR&hac=AVAILABLE&mbl=MEET&mbldelta=0&rate=93.3400&fees=16.8000&cur=USD&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1823d85985f469b0fd98112b4544ac747&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5a5704c788c5474bb29e095c70e28e6d&tp=MobileHotelSearch",
                    "auction_offer_key": "5a5704c788c5474bb29e095c70e28e6d"
                },
                {
                    "content_id": "125660700",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=125660700&geo=13814626&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=15&silo=6103&bucket=901739&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=moXNt1hBhOzDqXP9_ij5V3qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4q3Bat8BLpP9reGlSeE53d1iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrx5mtu8fua4RtTIK5agivTkVbnplo1-rIJnfpDwdMD61RfJLlj69fiWwOpJsjCZi53HK1nIDsmqwixk8vVt0ysgIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11a3c1ac7b7d882254e86b7f26bfab3df&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=90ab197090a544f99ecd9d350e1ed9b9&tp=MobileHotelSearch",
                    "auction_offer_key": "90ab197090a544f99ecd9d350e1ed9b9"
                },
                {
                    "content_id": "230377496",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=230377496&geo=13814626&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=15&silo=10500&bucket=903023&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=-L6C6Lv-V13LkO-1hGyenBhDFBhBGFMoTiNwTQdS8MHvhY0OXv6hyxTiAL35rle1Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96m4286dcY5PNhtE3Tsf-njKp7WdChdxfqBzI0R0YJtIILT0eFS2noO5b-eAEMPdxfdZGSbjkolhIZZQb_Ff-szM-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f2b0638df6447cbacd039100861bfd8e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=04b1a4ce82454d7b95d1efd8af29c869&tp=MobileHotelSearch",
                    "auction_offer_key": "04b1a4ce82454d7b95d1efd8af29c869"
                },
                {
                    "content_id": "125662556",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=125662556&geo=13814626&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=15&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=Ew2BaXwyIlrpEstK4MgJy2O9ZmiX9y04TJt583qVd7WibvFmZta8EWm50NO1WhhuRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTRgVyEBKaFRZnoJkpafsVG_kGKe8fYnAHkqFXda1cqKlQla6_JlXfAsqc1R4THkBhiVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f06bbe5a7f95c02efd4e36178ebbf813&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3607c5eb54c34259825784a9ad1f6003&tp=MobileHotelSearch",
                    "auction_offer_key": "3607c5eb54c34259825784a9ad1f6003"
                },
                {
                    "content_id": "209329545",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209329545&geo=13814626&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=15&silo=41662&bucket=963192&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_BkaxzzksgPXT6NANAyB6htiMShykcf-t_lImP_P3J01tpWmFgdejGgxEO4KP8CX7YL0cFe1IdxvtSkwdCAQckWyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a4032f34c946a57e04676a340516ad1c&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=422223c921c54970bb5642322ccd0c1b&tp=MobileHotelSearch",
                    "auction_offer_key": "422223c921c54970bb5642322ccd0c1b"
                },
                {
                    "content_id": "124454890",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=124454890&geo=13814626&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=15&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=hNAr6IFhnIRG-vEH9WHT-Wto9EMKlTyDkULqlxXwEfeSBGPLO5u8UvjDppHvjsE1fJMRni2Dk8OerJncRq5nzX5W6PNHn5Drlcf0lw6WoNRGzlF-hdzNscqPRYsL9FYSAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1803ab1bc6b2557cb5a854f74e642f72e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d0c0e9170567439aa291f88a99828a15&tp=MobileHotelSearch",
                    "auction_offer_key": "d0c0e9170567439aa291f88a99828a15"
                },
                {
                    "content_id": "153171681",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=153171681&geo=13814626&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=15&silo=13669&bucket=899272&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgKKsq6X72f96FsPGyryhQwAYjFj1KozGVwmbUclUCYW-NJf8E-swhHW97yTj1kUDKBaUKxFf3yeJlfj3JbslkLUUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a60c6626d7b30211e8a3cead43354ad9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=37b06985024e4f10aa2229510b4c3c48&tp=MobileHotelSearch",
                    "auction_offer_key": "37b06985024e4f10aa2229510b4c3c48"
                },
                {
                    "content_id": "128701174",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=128701174&geo=13814626&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=15&silo=35404&bucket=914257&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=6LpTFguEwsoN-4woZ1i0dLNHqApKy_X3yO6LCEu_kOxaBswyURThOFlhoSb6YXNriMShykcf-t_lImP_P3J01gwlZvdXdbGZAsU2sm1oaNAL0cFe1IdxvtSkwdCAQckWyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c2335c4502db5cca4e8e05e97e00f9bf&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5c23bd7ea5464d57a092f1c0be7347e6&tp=MobileHotelSearch",
                    "auction_offer_key": "5c23bd7ea5464d57a092f1c0be7347e6"
                },
                {
                    "content_id": "123050955",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=123050955&geo=13814626&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=15&silo=20728&bucket=862895&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=sYTKlc22jrgfwXIViIfMYa-UL95oetdYw4qpp-uXtUPlA4882ujliLvxk2Tv_75E1X9GW9K-M6HKJsA2Rz8ZH1PrahFclXGa3erBE3flhS-m7wVZx6aERjgZ9NhVNhj4HR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10acbb8fb46a00bf9c96144a28fc6a43c&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=324eb893e6d141e19578ea3d2ba1607b&tp=MobileHotelSearch",
                    "auction_offer_key": "324eb893e6d141e19578ea3d2ba1607b"
                },
                {
                    "content_id": "173220536",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=173220536&geo=13814626&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=15&silo=5122&bucket=895087&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=48FRQ9BFkJZsyRBIW71nN_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEvZTWo4TT-k3UxuIqDEr1lMavbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTrzUWev8OeWJlkD_XH9CBVSuTKZYxgTwGMvCuOVoeux7CrOIzLPscQorULlgZwGjBYlVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f304e3c8ec38d556e34c90f3b781b96e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a4c9c717d5fd45b8a0abc5534ec18aee&tp=MobileHotelSearch",
                    "auction_offer_key": "a4c9c717d5fd45b8a0abc5534ec18aee"
                },
                {
                    "content_id": "175239239",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=175239239&geo=13814626&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=15&silo=17377&bucket=927871&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCbfYLg8OMMwq0yAm7ZkNZE5iMWPUqjMZXCZtRyVQJhb4LLez4l80jysmcksH2NjuWlpQrEV_fJ4mV-PcluyWQtRQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c7aef83808829f81cfd9f309330d2c60&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8991fed868dd4043a61babee8e77bbca&tp=MobileHotelSearch",
                    "auction_offer_key": "8991fed868dd4043a61babee8e77bbca"
                },
                {
                    "content_id": "177118138",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=177118138&geo=13814626&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=15&silo=33308&bucket=894612&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=mIYXr4WVLYe2eMBQy8DPe2VclNY9LuHe68owdeF7R9r-TLSpP_cHpab0fu_b77N29r4qTI3WFXzTjn2q_RRA9BA9K7MmsroimglZYqrzLSx35B02EStXjmHgjnqCtNxvhz9aBGgkN26UYQ7tDDg7AX8M2WXq1sDbdfTXgGoSOsVUSjRKl7DrBH0YVZGadzeECQaRwVupbgq2JnhsKM4_ANsncb2tAlwgzVfnsx8WaaYK6UwEMdPHGRf8Dn9YrgDi37WPFHZiHp08uvzvqo8kkQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=139b22b92dfb137260556606d34665bd1&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fe51ee3fde9249c097be8a94fb7f4275&tp=MobileHotelSearch",
                    "auction_offer_key": "fe51ee3fde9249c097be8a94fb7f4275"
                },
                {
                    "content_id": "148090272",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=148090272&geo=13814626&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=15&silo=40511&bucket=944068&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=AcaRFe75o7Rh_TcPtsnWjLv5FMffsxQed-28NMcwZNd3hQ8BxneOCo73jIfNk-HBJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOyuR8TRxMXOmrct3yKQRVmUD-7pAs6482NM7HyIFd-iD2l-tK3lNSNTwTaRa973NVtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13062b272454f702a715f7a7f21147c1e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=98d5416644964248ac6fa0fb28c5093f&tp=MobileHotelSearch",
                    "auction_offer_key": "98d5416644964248ac6fa0fb28c5093f"
                },
                {
                    "content_id": "246428232",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246428232&geo=13814626&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=15&silo=47774&bucket=998819&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNNb_7FnTDR-xsRiKRw-XsQnQOSnONR-1KFFR-I6d9a1Fl_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10abf7d1ffe75079aeecbd5ba5f1b02c7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d0e71c42cb364f6490987a79d30a6ed9&tp=MobileHotelSearch",
                    "auction_offer_key": "d0e71c42cb364f6490987a79d30a6ed9"
                },
                {
                    "content_id": "150145013",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=150145013&geo=13814626&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=15&silo=29510&bucket=913032&nrank=14&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z2yCKDd30k7VOysz0qUiF8iRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiSG183rSz0n481kvYoogaZzfi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=8c262a6d-c2fb-4ba8-98a6-3c5b0dad1f65&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14d5ec5122e1c4d9a1253419af66f1f2a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b64ab96dcdb4463a8f4188574b42ecb5&tp=MobileHotelSearch",
                    "auction_offer_key": "b64ab96dcdb4463a8f4188574b42ecb5"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Accor Hotels.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "1bc4ffce-77a4-4f1d-a694-d60c4a02c098"
    },
    {
        "location_id": "589282",
        "name": "Courtyard by Marriott Chennai",
        "latitude": "13.046037",
        "longitude": "80.24799",
        "num_reviews": "4232",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/5b/bf/92/rhapsody-lounge-bar.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/5b/bf/92/rhapsody-lounge-bar.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "4000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/5b/bf/92/rhapsody-lounge-bar.jpg",
                    "height": "2667"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/5b/bf/92/rhapsody-lounge-bar.jpg",
                    "height": "367"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/5b/bf/92/rhapsody-lounge-bar.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-06-01T21:02:53-0400",
            "caption": "Rhapsody Lounge bar",
            "id": "693878674",
            "helpful_votes": "0",
            "published_date": "2023-06-01T21:02:53-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.840561389923096",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "2",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#2 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.8219913161018724",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$89 - $123",
        "hac_offers": {
            "availability": "available",
            "offers": [
                {
                    "content_id": "106243812",
                    "provider_display_name": "ZenHotels.com",
                    "internal_provider_name": "ZenHotels",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/zenlogo.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "available",
                    "display_style": "premium",
                    "display_price": "$112",
                    "display_price_int": "112",
                    "link": "https://www.tripadvisor.com/Commerce?p=ZenHotels&src=106243812&geo=589282&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=15&silo=24521&bucket=901414&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=_8eVQTXoXt7USP_cR_cPzaRT8ocLPq8kD56yiYJHnjdUZgmPwp9ohlt2Or7drV3SVioW38ooUcr1L1-bcl8ruFqOEFBycV7XTo_-E2VTk51BLRww9U9XFJO0MhyxoQRUR0yx6bq7dtDeDDYEEJgCkQdWLsexKp1DN3iDhtfxWgxSXLhqPKTYhj4HHyB-KpN2qpyEGSk8F_hZm79XabgIE-PcgAZIOZyS6LOSpWQJni-PY5d0uCFtcWybm9XTRSEbIMruc36-f8grIb_jqhd-_w&priceShown=112&pm=BR&hac=AVAILABLE&mbl=BEAT&mbldelta=0&rate=111.7800&fees=23.2000&cur=USD&adults=1&child_rm_ages=&inDay=27&outDay=28&rdex=RDEX_3a5f38b8d0708fa492908fe367dd6996&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10b741031a666d52210a227491517fc4b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c0262aeb433642199faed29f5e3151a0&tp=MobileHotelSearch",
                    "auction_offer_key": "c0262aeb433642199faed29f5e3151a0"
                },
                {
                    "content_id": "32484310",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=32484310&geo=589282&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=15&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=B6oZ27WM5XrVb4mhqw5n9xhDFBhBGFMoTiNwTQdS8MFHeom-GwF1XI4RG0B6Yq4hAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96injaRQbx0LPloJpSr7CBjYLC-yBwtPfzAUuZYZdatAJ7oXDxLcj2xFX6rUFyelgStDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17164263428f00b6d8995985eabf8ecec&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=61f747885e3d431ba1d6119aefe06926&tp=MobileHotelSearch",
                    "auction_offer_key": "61f747885e3d431ba1d6119aefe06926"
                },
                {
                    "content_id": "32634574",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32634574&geo=589282&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=15&silo=4310&bucket=910482&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=0t5QsuIWf4CrAVedx_na32O9ZmiX9y04TJt583qVd7VAgU5jpBycxk27YuR2YZ9MRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TT9zySkiR4xxAaWAgWhUo8cTbyFziiToQM15r5Po6xcf0Ktta5Z9apNN8vgF9p91fvtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15d76d4693e5b1f3181afa8d69c1636bb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5ac7cfbcb5f949b7b953bf4e3dffe7c6&tp=MobileHotelSearch",
                    "auction_offer_key": "5ac7cfbcb5f949b7b953bf4e3dffe7c6"
                },
                {
                    "content_id": "34540785",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34540785&geo=589282&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=15&silo=6103&bucket=901739&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=XhmdQA5gulV500gsrPi7L3qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4LkyDy5XFHyYIoLYbK8gP1liUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrMQYI2PZ1-1wTpUvaBUBK70Vbnplo1-rIJnfpDwdMD61jq0KgrRfLEvN-YFkYHhjKvZES1qg6oYKLt6FD4Pwu-3lcs4KAedh0DKlnGsAQtnKubglGHBEqUWRBEaJu90LenqdgZXIgl3cYBpSlXt_7gA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11d498804c9806672541a56d22932b604&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=712533dccf9a4517960e71cf311859be&tp=MobileHotelSearch",
                    "auction_offer_key": "712533dccf9a4517960e71cf311859be"
                },
                {
                    "content_id": "38611819",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=38611819&geo=589282&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=15&silo=17377&bucket=895478&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NBowHJuiVJ02KqSD9RyhREawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvJA_JVUBnG0kfuqfNyWSSNt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLm-gCDa-VFg55_U9aHl0Sbk2mX1HYO_rIcJn6n79MaCGd2SyvmiQuzbL-W0qhScJrIan-ueckqumf7GOp1HSMHF-LvnfW3ZiUcmxdkDKjfLfmXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a95ad3f0f5a793f3ff4391ff7cca1311&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=85d6fa0767d54dbf8b19de0a84a6cb62&tp=MobileHotelSearch",
                    "auction_offer_key": "85d6fa0767d54dbf8b19de0a84a6cb62"
                },
                {
                    "content_id": "53941164",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53941164&geo=589282&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=15&silo=11456&bucket=860112&nrank=6&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=jexf1oji3fLgfLKVOlqm_GWUKnhYialPiOZ2E8ZbKD1-LUcnAYNEgqdAoAEbVAxKfJMRni2Dk8OerJncRq5nzX8zG9FuSCqaGGQEhQH3l8EQ-I2PXS4FBCGG1zNM4wumAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18a21167f08860c3540f3245ed1cbcc06&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fd26db110d2c461a92b8bc91eaa8bb0e&tp=MobileHotelSearch",
                    "auction_offer_key": "fd26db110d2c461a92b8bc91eaa8bb0e"
                },
                {
                    "content_id": "207814719",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=207814719&geo=589282&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=15&silo=41662&bucket=963192&nrank=5&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_AEtvESACSwWEAY8bHrDEX3iMShykcf-t_lImP_P3J01oVn60FH0hgljqmXhF2m6A-hRHqcXAuDgFapn5e79z0kyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12100e60e374f98a28621fc1431001ee2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8c0de155d1434e1480f6e394fcb3e61f&tp=MobileHotelSearch",
                    "auction_offer_key": "8c0de155d1434e1480f6e394fcb3e61f"
                },
                {
                    "content_id": "79230096",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79230096&geo=589282&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=15&silo=13669&bucket=899272&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgL_O1Fw6FtvM9ch3ajiCZNtYjFj1KozGVwmbUclUCYW-OAdFpBpn-3BMdYsRSgRrCUuiy7AOxcBS7S4qUevk4MrUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=184ffd5bf48ad34c6576094dd7a3317fa&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8d2537f3d2f442eda7f7fa424c1c442c&tp=MobileHotelSearch",
                    "auction_offer_key": "8d2537f3d2f442eda7f7fa424c1c442c"
                },
                {
                    "content_id": "60316070",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60316070&geo=589282&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=15&silo=35404&bucket=914257&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=ZTfC65apylFz5x2Dz0e-pOdggPSbiXgucycRdAId4XCFGA46f-5vBSaGtlodB24niMShykcf-t_lImP_P3J01gwlZvdXdbGZAsU2sm1oaNChRHqcXAuDgFapn5e79z0kyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1021176e1c4530285c157b7b36e01cb65&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9bf066e3cc524c34ab7da896bac3b6c8&tp=MobileHotelSearch",
                    "auction_offer_key": "9bf066e3cc524c34ab7da896bac3b6c8"
                },
                {
                    "content_id": "37777508",
                    "provider_display_name": "Courtyard",
                    "internal_provider_name": "Marriott1",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Courtyard.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Marriott1&src=37777508&geo=589282&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=15&silo=13813&bucket=900284&nrank=12&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=EJcAGCKoSD6rPigyMlMpzUylTjp3uoN_ZHeKNqFzeukc2nzNw4lWYFDpftmnaRgfj162sHvet-et20GQFSoDz802J61RxXtMq9nM3fT9DJOnshNZPAKdCBx2wdMSug3i6cYwnsbVZBKUyrFgjh57TXyTEZ4tg5PDnqyZ3EauZ82GIAdbcEIiyDqlYORU89Go_Zq9aB3oDZWS88Z7QlXPuQIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b678fb2b181215b0a2edbfb615bf8c07&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6baffa42a16f4d53894d61fe9ef7d187&tp=MobileHotelSearch",
                    "auction_offer_key": "6baffa42a16f4d53894d61fe9ef7d187"
                },
                {
                    "content_id": "129722366",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129722366&geo=589282&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=15&silo=40511&bucket=944068&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOOOF7pmIdNWMj5utdqzmVfr9Q_1t1m3OWiEMufRkHi2755hWB0b_cwuypFC0JWraLtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16fc8778108d475948997be449cb85a8f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=23fb74e24ee049ca977a1a44dc014e1c&tp=MobileHotelSearch",
                    "auction_offer_key": "23fb74e24ee049ca977a1a44dc014e1c"
                },
                {
                    "content_id": "78897942",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78897942&geo=589282&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=15&silo=20728&bucket=862895&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=yi8NIvmSaxEQ98L7FpSN4HLqZ_aCSvWev2-8INuf2jbFY4AEFASoyVbyhRtlbdUJ1X9GW9K-M6HKJsA2Rz8ZH-re1YK0wxjn9dgsdvg7C4P7IvIddhpfljg24-ocsjqOHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c3a22adfb4dc794217941f954b977ca4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=cd6203a8320f4e9ca0b0dfd1f01afa21&tp=MobileHotelSearch",
                    "auction_offer_key": "cd6203a8320f4e9ca0b0dfd1f01afa21"
                },
                {
                    "content_id": "174635731",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174635731&geo=589282&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=15&silo=33308&bucket=894612&nrank=8&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4n69zBan7hCOpLInKnnfwWVclNY9LuHe68owdeF7R9o-F1u24oCHN5xWl4M83U7N9r4qTI3WFXzTjn2q_RRA9BA9K7MmsroimglZYqrzLSx35B02EStXjmHgjnqCtNxvsaKaKr5g7aeaEaTDyec-pvLGLRQWUxhtFdZokVqk2X49Wlj2rmkuudB6gmntaIYRCQaRwVupbgq2JnhsKM4_ANsncb2tAlwgzVfnsx8WaaYK6UwEMdPHGRf8Dn9YrgDi37WPFHZiHp08uvzvqo8kkQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15e5df5f077936d0c73c60de207289ccc&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bee94c6e3cc5486ca6aeda6039882432&tp=MobileHotelSearch",
                    "auction_offer_key": "bee94c6e3cc5486ca6aeda6039882432"
                },
                {
                    "content_id": "35830137",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=35830137&geo=589282&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=15&silo=5122&bucket=895087&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=SFJCaGvRv-ugcDk9HdYXEPIrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEvYaW1QF1XVtdH9L3SSMQGFKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvBjB_tC_waADwjOIL3nvZWPvt2WkN4OAbsVC-5pctAXVbbIRhLWZKDF2GpftuDxa4lVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19b08e7fb0819e8a1e040fa6073f04446&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ac073f96226a4055bfa1cbe243f4a721&tp=MobileHotelSearch",
                    "auction_offer_key": "ac073f96226a4055bfa1cbe243f4a721"
                },
                {
                    "content_id": "246568733",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246568733&geo=589282&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=15&silo=47774&bucket=998819&nrank=14&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2hr4vKCwkkYnAJvrwb9eEYV8kxGeLYOTw56smdxGrmfNDS5hUKL-MT8hGHtV0L8s-5iG2zOzzAQRixgKcnS-o5Fl_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=610a55ea-04a1-48e8-afb9-6155d43161cf&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f123271235d0369f52b03ef98b31caa8&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=68f3d6c922d04fbeb11baff5d8542377&tp=MobileHotelSearch",
                    "auction_offer_key": "68f3d6c922d04fbeb11baff5d8542377"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "4.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": [
                {
                    "value": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=183964364&geo=589282&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&nrank=1&crank=1&clt=CLM&ttype=ContactLinkMobile&tm=270244121&managed=false&capped=false&gosox=g3xMt9YCHBy3ZUg-YypssegjQviHlJQg6b-lnBPg98x_z9Z0XP9pjcZi3RyRnEOZqdJboSx8MoInRNyxuWe5dJZqL2uezWhLYYQexLs_Kpg&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&dated=true&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&bapid=1&cs=19c77960a164235ab2711486494286a6f",
                    "label": "Hotel website",
                    "type": "url"
                }
            ]
        },
        "special_offers": {
            "desktop": [],
            "mobile": [
                {
                    "headline": "Unlock Member Rates!",
                    "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.589282-a_offer.9589926-a_trafficSource.ba?adults=1&child_rm_ages=&inDay=27&inMonth=7&inYear=2023&outDay=28&outMonth=7&outYear=2023&rooms=1",
                    "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=183964364&geo=589282&from=api&area=OID:9589926%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&ubucket=934870&nrank=1&crank=1&clt=SOIM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGRo1pYOECo-nMe475JF5IREqAJazH_9m27-shQzhthfhQ&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&cs=103f6e74b3b3087ca4938150c7edb1a2a"
                }
            ]
        },
        "listing_key": "1b75c341-1c1a-4901-be34-217c753ca3f0"
    },
    {
        "location_id": "8872881",
        "name": "ibis Chennai City Centre Hotel",
        "latitude": "13.057253",
        "longitude": "80.25671",
        "num_reviews": "623",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/db/a0/4f/exterior-view.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/db/a0/4f/exterior-view.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1c/db/a0/4f/exterior-view.jpg",
                    "height": "768"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/db/a0/4f/exterior-view.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/db/a0/4f/exterior-view.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-04-14T01:30:11-0400",
            "caption": "Exterior view",
            "id": "484155471",
            "helpful_votes": "0",
            "published_date": "2021-04-14T01:30:11-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.310683250427246",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "3",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#3 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "2.8550132352536104",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$56 - $63",
        "neighborhood_info": [
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "available",
            "offers": [
                {
                    "content_id": "82198521",
                    "provider_display_name": "ibis",
                    "internal_provider_name": "Accor",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Ibis2.gif",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "available",
                    "display_style": "premium",
                    "pay_at_stay_message": "No prepayment needed",
                    "display_price": "$61",
                    "display_price_int": "61",
                    "link": "https://www.tripadvisor.com/Commerce?p=Accor&src=82198521&geo=8872881&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=13&silo=6622&bucket=903795&nrank=9&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NtQz5lDOZgknX4rU2lQ9UqKrAldBjEPPOTvBsXVH23PUwJqg78NvLunfj3R58fwZZ9MRqUUjs1XsclH3ea3-OpG_A94dCjeOmCm4oi66UfYdIRNrSxVPqwFqnvpUHbSmQqwhBVg-tlU_AUrf3i2W71O2Bns-Q7Ezb3ShKAoemH8Etra4DRgZWOys192j-kO4k77Ssh-ac1TqXbC5oU1Vxb3vqaGYvzBGNp41wg9vHoYk-oLX59RVCdIZacK_PZTh-wMkXUg0VjqYuyk06yQKGyL-qlR2VVIusPyj-S87vAs&priceShown=61&pm=BR&hac=AVAILABLE&mbl=MEET&mbldelta=0&rate=61.0600&fees=7.3200&cur=USD&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1242128226c85e1f1344b035068fe0b2a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=612491272a974e7f92a23ac8a2c913ee&tp=MobileHotelSearch",
                    "auction_offer_key": "612491272a974e7f92a23ac8a2c913ee"
                },
                {
                    "content_id": "100000406",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=100000406&geo=8872881&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=13&silo=6103&bucket=901739&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=DINKH0eMRQz2ec01r4IEHXqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM47zB4ByINCePIA0O8NYrpT1iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrMQYI2PZ1-1wTpUvaBUBK70Vbnplo1-rIJnfpDwdMD61QyMiI14z39XVEMkFRrmm5y43hd73apWIug866ZJHk6gIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1829f2f4e659d1cd4dc506393ab70eb1e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9220bf05ac2e40ad82728739447eaa2f&tp=MobileHotelSearch",
                    "auction_offer_key": "9220bf05ac2e40ad82728739447eaa2f"
                },
                {
                    "content_id": "79095170",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=79095170&geo=8872881&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=13&silo=10500&bucket=903023&nrank=3&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TWued3vA4erqNcQwv_7gdhhDFBhBGFMoTiNwTQdS8MEVuZSvuVIkONlbo-w85iIbAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96injaRQbx0LPloJpSr7CBjSnp3sS923ms7BPfaJMUUHLjQ2ZmorhN5CvbZHX1CyFftDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=105b08b0f05a8e0fd8557cca0886d691b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d8369135822f4f07a8f847705ceac197&tp=MobileHotelSearch",
                    "auction_offer_key": "d8369135822f4f07a8f847705ceac197"
                },
                {
                    "content_id": "76471062",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=76471062&geo=8872881&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=13&silo=4310&bucket=910482&nrank=2&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=l56LeYTPru0MGgZtQdFAEWO9ZmiX9y04TJt583qVd7UC0VRr-OnrV7D71nSYX2pcRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTMrHGcZGM2CHOMoCxSJmPptmdFA8XCrgAz0_XSHtHC8FtDy94Qy5F8gDXRH5m2JIdHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fb76f6b7ed739e514c55719cc49ac983&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bd90bea8990f499e971518d23f85976a&tp=MobileHotelSearch",
                    "auction_offer_key": "bd90bea8990f499e971518d23f85976a"
                },
                {
                    "content_id": "76601557",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=76601557&geo=8872881&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=13&silo=11456&bucket=860112&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=qTR9KbHUL6a_Z83j2MBjR_glwkHErrRMuGt2aIqtQSalw8efDLcYfAL1Le5EIRfmfJMRni2Dk8OerJncRq5nzdZUt0ZKDg5myUpuKyTpjgDQgpoezO9fyEmuIoAZDxodAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15e26b97956e1d7dfb61b5847db2052d8&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fd2aaa6bbe654cc4a14b773513ce7c84&tp=MobileHotelSearch",
                    "auction_offer_key": "fd2aaa6bbe654cc4a14b773513ce7c84"
                },
                {
                    "content_id": "100151622",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=100151622&geo=8872881&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=13&silo=17377&bucket=895478&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NBowHJuiVJ02KqSD9RyhREawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvJA_JVUBnG0kfuqfNyWSSNt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLk5sgSSaYWBc3OvIg-WLkHg2mX1HYO_rIcJn6n79MaCG1FOtWislf0Br6wcgCzUe2yFT7NjsRoQVTwYmEruqQ-V-LvnfW3ZiUcmxdkDKjfLfmXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10847fc5103054f2baaa6d86ea470ac39&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2a98b36b1c454a6d9250017dcfed3dab&tp=MobileHotelSearch",
                    "auction_offer_key": "2a98b36b1c454a6d9250017dcfed3dab"
                },
                {
                    "content_id": "209068207",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209068207&geo=8872881&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=13&silo=41662&bucket=963192&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_BkaxzzksgPXT6NANAyB6htiMShykcf-t_lImP_P3J01oVn60FH0hgljqmXhF2m6A9tJ8euDKdR6nFysJTS89WZyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e9c856531298f56bf26fcc5230b8d770&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=0699fa4590e34d43bfae75ffa762e14c&tp=MobileHotelSearch",
                    "auction_offer_key": "0699fa4590e34d43bfae75ffa762e14c"
                },
                {
                    "content_id": "115628766",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115628766&geo=8872881&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=13&silo=13669&bucket=899272&nrank=8&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJ2qsP09ApFCpcCC0-hrP5dYjFj1KozGVwmbUclUCYW-LcmhSfxpw66BnPauIszIV72I_8nWSm0Nd2w9rlxCowwUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19f676231a156786d33877d18df4d80ca&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=82a5787965e2433ea7e3be0a2d03c9fc&tp=MobileHotelSearch",
                    "auction_offer_key": "82a5787965e2433ea7e3be0a2d03c9fc"
                },
                {
                    "content_id": "100064912",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=100064912&geo=8872881&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=13&silo=20728&bucket=862895&nrank=7&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=CwDJfr5P74i2FxPm2HFh0Gm_Ad2WVMUCYFul6YcrnSwWdZcWqSVeJUpgNW4xUCuq1X9GW9K-M6HKJsA2Rz8ZH_FawKzKG1HAs_DA2cLhhWaX97zprbJS3Y-gygulQpsXHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11a3649fa7d59f157708aaa7aa7ad5cf7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6f55ba9fa59c4ba198e4621db9e53202&tp=MobileHotelSearch",
                    "auction_offer_key": "6f55ba9fa59c4ba198e4621db9e53202"
                },
                {
                    "content_id": "79132755",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=79132755&geo=8872881&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=13&silo=35404&bucket=914257&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Hi1IA2wRDVbkBBQATpyuSjiT58K6L-eW3XoHYmRFfagT9F-vPhwVvA18uEQzaP3AiMShykcf-t_lImP_P3J01j9Xp0AtXWfHrzGgWmJ4SvttJ8euDKdR6nFysJTS89WZyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1bd7dedf0efafd9d85182eefc62afe498&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8dbfc39d662549d1a43bdd880958c54a&tp=MobileHotelSearch",
                    "auction_offer_key": "8dbfc39d662549d1a43bdd880958c54a"
                },
                {
                    "content_id": "174633919",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174633919&geo=8872881&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=13&silo=33308&bucket=894612&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=F-sHBYoBoOgmU3nRSamC62VclNY9LuHe68owdeF7R9rPm95-c96MSl5vYuf086It9r4qTI3WFXzTjn2q_RRA9BA9K7MmsroimglZYqrzLSx35B02EStXjmHgjnqCtNxvhz9aBGgkN26UYQ7tDDg7AX6wUwBnZMvzqFoNvEq_hZ7ys85LZeIP0R1ypDEeNZyXtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1d933ea5afd6dcfc2e1e9cfa2cf838b1b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ef241f8bef7a4a1d9e4547d224419b2c&tp=MobileHotelSearch",
                    "auction_offer_key": "ef241f8bef7a4a1d9e4547d224419b2c"
                },
                {
                    "content_id": "77628181",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=77628181&geo=8872881&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=13&silo=5122&bucket=895087&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=qkhWUTIieD7aH1FuDOoGB0cSySlXU2trcV6OnXKPrKb_xnxK3UlH82y0Mzbp1TqIX2-2vDSc80ghcmEh3gGdG6Dd2Tymz-KYX0fyVW47RdJMEq7p28XswFf7nLELj1y35wleuA1Z7mbDWSJV5cB1bHyTEZ4tg5PDnqyZ3EauZ82aee_irnfq92PCayDnAaGjGATNl2-ww4Js0W8kP9m1x3lcs4KAedh0DKlnGsAQtnKubglGHBEqUWRBEaJu90LenqdgZXIgl3cYBpSlXt_7gA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1101ad21961e04a02bbcda039586c26dc&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6cd4234d9a0e41598339f33a10a82a57&tp=MobileHotelSearch",
                    "auction_offer_key": "6cd4234d9a0e41598339f33a10a82a57"
                },
                {
                    "content_id": "246442288",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246442288&geo=8872881&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=13&silo=47774&bucket=998819&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNYjX5wJq4lUaC6QKpUil3h9BParVPwnuHvIBTzfxly95l_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17fc32ee-fac6-401b-bf96-5c69ade491be&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a4fea61d6571efff220d387ffa0ad681&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b7ac455a09054c8ca1d26e7a0e09e4d3&tp=MobileHotelSearch",
                    "auction_offer_key": "b7ac455a09054c8ca1d26e7a0e09e4d3"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "3.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "7e8204bf-1acb-4d99-a55d-d8d50bddc93c"
    },
    {
        "location_id": "3674141",
        "name": "Ramada by Wyndham Chennai Egmore",
        "latitude": "13.076876",
        "longitude": "80.26507",
        "num_reviews": "1695",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/e5/59/1b/exterior.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/e5/59/1b/exterior.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1023",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/23/e5/59/1b/exterior.jpg",
                    "height": "685"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/e5/59/1b/exterior.jpg",
                    "height": "368"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/e5/59/1b/exterior.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2022-06-11T03:59:44-0400",
            "caption": "Exterior",
            "id": "602233115",
            "helpful_votes": "0",
            "published_date": "2022-06-11T03:59:44-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.687041759490967",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "4",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#4 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "1.5892399332219183",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$67 - $120",
        "neighborhood_info": [
            {
                "location_id": "20484196",
                "name": "Egmore"
            },
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "available",
            "offers": [
                {
                    "content_id": "106058231",
                    "provider_display_name": "ZenHotels.com",
                    "internal_provider_name": "ZenHotels",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/zenlogo.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "available",
                    "display_style": "premium",
                    "display_price": "$184",
                    "display_price_int": "184",
                    "link": "https://www.tripadvisor.com/Commerce?p=ZenHotels&src=106058231&geo=3674141&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=14&silo=24521&bucket=901414&nrank=12&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=_8eVQTXoXt7USP_cR_cPzVCON9V6Lr9-R-SBQgCdgz2UZ1PpBTNHy-96obbK1FI68DZupuq9ytQBVL51DKhMEvARR5-R6GQ8KTofSpr2LMofOPnk3K_c0Fqukao1XoM8guy8gjVmiWM--WIlncaLL-lqqCWPIM7uJg-YB-Q_8JEpkNtlzE5m5YgXTTklyiF7yPL7xjFTWwyNHRR0--NfNGX8MB2FPRgnpR0e7I1zSESjxZISq61u-bvyCdTuMxiS_PkszveYB3tf63j4hIIgYw&priceShown=184&pm=BR&hac=AVAILABLE&mbl=BEAT&mbldelta=0&rate=183.8900&fees=37.9200&cur=USD&adults=1&child_rm_ages=&inDay=27&outDay=28&rdex=RDEX_6deb9050ad22844c4333ae377bd85e89&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b3066c4ac9996f5c878a1c3aa15a74a0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5339bf23e7df42ed96b0be38e95baed9&tp=MobileHotelSearch",
                    "auction_offer_key": "5339bf23e7df42ed96b0be38e95baed9"
                },
                {
                    "content_id": "46643169",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=46643169&geo=3674141&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=14&silo=6103&bucket=901739&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=V8TP8If3XShtd-f8Qwmn63qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4gjtFHyN0JULvekNXdoJ_5FiUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrg9bYC0D0aEJ3iK5u-hDWeUVbnplo1-rIJnfpDwdMD62nJ2GfmG36GuTWJ-P7og2Ry6RBm5RFgoxZ4dYe8C0_ywIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19a1d0c804f07dc1c3057856b23f1c728&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=eb251a3a570f492fb0b24fe92a9360f1&tp=MobileHotelSearch",
                    "auction_offer_key": "eb251a3a570f492fb0b24fe92a9360f1"
                },
                {
                    "content_id": "44768612",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=44768612&geo=3674141&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=14&silo=10500&bucket=903023&nrank=3&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=ubOYyUxjgDfoRgSLqXKNshhDFBhBGFMoTiNwTQdS8MGbNhbTl9FKTaxelr14Ni8_Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96m4286dcY5PNhtE3Tsf-njGcv0gj3hrfGQDEFbIefNvl2d-SkEG4BLBkTI3AQjf_OtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=157487c98a211228924c8f375d1c54ff0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c2393f8d95dc403685c7f94ceb84501a&tp=MobileHotelSearch",
                    "auction_offer_key": "c2393f8d95dc403685c7f94ceb84501a"
                },
                {
                    "content_id": "177278459",
                    "provider_display_name": "Wyndham",
                    "internal_provider_name": "WyndhamLQ",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/bywynd_logo_ra2_2019.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=WyndhamLQ&src=177278459&geo=3674141&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=14&silo=36432&bucket=924047&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=BUswpihh-bRO9x96fsboHtVyMEaOvuGpB_n1BlUkAy53ja7WA6L_NYlp48vd_dbnWJSbcU1r5v1BIoVBVV73uKRApYvu204RYQ9CfJ0n8aMEkwoTyoGpPv_w-fx08QJzNjp39uCacvrPxeuELxYALBg997ByArB84gbDtSHMRdT2_2tGT2PaX0fYQVJJ249w68spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e16abc925b6d6febb6942f6699daf2b5&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3e89bc7a0a9f425ea1368a9b32ed7e72&tp=MobileHotelSearch",
                    "auction_offer_key": "3e89bc7a0a9f425ea1368a9b32ed7e72"
                },
                {
                    "content_id": "47885069",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=47885069&geo=3674141&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=14&silo=4310&bucket=910482&nrank=2&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=w8iMwlhjdiSdPtWnIWNDV2O9ZmiX9y04TJt583qVd7UB1sF8hyFIBlcuxe1qrZRFRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTsB2YczAdPksmvkv1VW88XtmdFA8XCrgAz0_XSHtHC8G8A9rB2-XVDBYonb6g8Hn9iVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b9f62fc6135c9877fa64f20b5c98856a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=abc32873343848138e37af5446ad6cc0&tp=MobileHotelSearch",
                    "auction_offer_key": "abc32873343848138e37af5446ad6cc0"
                },
                {
                    "content_id": "53965657",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53965657&geo=3674141&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=14&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=qTR9KbHUL6a_Z83j2MBjR_glwkHErrRMuGt2aIqtQSYgwa1gV5vfFCMsW4CYzGTGfJMRni2Dk8OerJncRq5nzQKD-dx0ssdeeSbhd4wUoxfhb1E8ZiH6bv8l-h1KAxAhAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12d151cd4ae4be476b9524f80ae67ae6e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=408b80fc847648c39c427914d97e1f0a&tp=MobileHotelSearch",
                    "auction_offer_key": "408b80fc847648c39c427914d97e1f0a"
                },
                {
                    "content_id": "174640299",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174640299&geo=3674141&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=14&silo=33308&bucket=966843&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=bYP6DfrB0SvMMQZ8jYUo9idgTJK8HXfYRlfQuL7YLXyE9bJp8FP8B2MB7iqF3ZkqzUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5fGov6ztKywB8v6YVlHaK7mIxY9SqMxlcJm1HJVAmFvj0MD1GYwDZWWOgvnOdvTPcLjfZh83cP6YjqjpT6WLulnbs4Ja0pQrT3dabQvYhWpFAi8SdpvCclypO7c7zLAbs61UV-yi6ywqesvDCr-dX6g&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11ba8c20e9b22fcc1e3b1d1b3ce760778&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f6889a8c7df94d338cccd516995768e0&tp=MobileHotelSearch",
                    "auction_offer_key": "f6889a8c7df94d338cccd516995768e0"
                },
                {
                    "content_id": "209232386",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209232386&geo=3674141&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=14&silo=41662&bucket=963192&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_ArhaSGH7Nnip_ypuPGAfJA1X9GW9K-M6HKJsA2Rz8ZH5r0g1mNGsDOMk-jSDhYmxzhb1E8ZiH6bv8l-h1KAxAhAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1d558e859ffc18d2c3d4bc32fe5fd1834&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=aea318fdfa454e1085bbb6a5d26b1b01&tp=MobileHotelSearch",
                    "auction_offer_key": "aea318fdfa454e1085bbb6a5d26b1b01"
                },
                {
                    "content_id": "78960631",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78960631&geo=3674141&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=14&silo=20728&bucket=862895&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=CwDJfr5P74i2FxPm2HFh0Gm_Ad2WVMUCYFul6YcrnSy1c4HT1K_PETBFEKDHWi2x1X9GW9K-M6HKJsA2Rz8ZHwdJOUuEigWE7TKkTVSbwa9AZDv8ti-AJ4mYsr6T_ITPHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c58de4058493c1dfdc863ef5f1a8dae9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bcebde279c904d168a49caf52f173a39&tp=MobileHotelSearch",
                    "auction_offer_key": "bcebde279c904d168a49caf52f173a39"
                },
                {
                    "content_id": "79219193",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219193&geo=3674141&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=14&silo=13669&bucket=899272&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJo6L128HNEmHLLZsCL7iO1YjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3wwe26KhOuYPmCt8m82ZobyOUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=198639ac2dc3e0423a12d99fd755e2899&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6fa62678f44b4eb2bc344a01fab17448&tp=MobileHotelSearch",
                    "auction_offer_key": "6fa62678f44b4eb2bc344a01fab17448"
                },
                {
                    "content_id": "129721545",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129721545&geo=3674141&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=14&silo=40511&bucket=944068&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOj2bj3mwvm6Y9GcXEeeqHGEuyY3kywSCimYWnk4P0xNIsR640fBN7S4BNUt4E9o2968spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1eb04f227047ef3fd7605f2d1978079bb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=232426b7a0244fc697a94cb7741b1f5e&tp=MobileHotelSearch",
                    "auction_offer_key": "232426b7a0244fc697a94cb7741b1f5e"
                },
                {
                    "content_id": "43754276",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=43754276&geo=3674141&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=14&silo=5122&bucket=895087&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=SFJCaGvRv-ugcDk9HdYXEPIrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEvYaW1QF1XVtdH9L3SSMQGFKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTspnW4cKy8g7ny8QL4bNSBKPvt2WkN4OAbsVC-5pctAXCw23kRX6CBUxOf-T-3BjhYlVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14fd718c7a1aeb1c308456f5e1f1844ac&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d2e47813224d4881ac6b388dba95924f&tp=MobileHotelSearch",
                    "auction_offer_key": "d2e47813224d4881ac6b388dba95924f"
                },
                {
                    "content_id": "71675396",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=71675396&geo=3674141&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=14&silo=17377&bucket=844412&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=zUAzBHz1A_Ahcz1J7Pgs1jCFk-6mbRWzuALu6h1CAVVsbOJS_V0ZHENGCRZX-EgiRVuemWjX6sgmd-kPB0wPrYsv83oHu9x2gmMwO88Jd6Q30yurzSE3gz7yni6XsAyefi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1de65bed9a35953f4943f39a0beebffae&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9e2d9b18a46743bb95209373cb3c9054&tp=MobileHotelSearch",
                    "auction_offer_key": "9e2d9b18a46743bb95209373cb3c9054"
                },
                {
                    "content_id": "150231757",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=150231757&geo=3674141&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=14&silo=29510&bucket=913032&nrank=12&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z1ka7r7hqTSliEuhcRW8-iHRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiQ30yurzSE3gz7yni6XsAyefi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1cda3da9-9349-41a6-a999-057d6f8fc602&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e29433b178e7b86bcb6074b38f550bfd&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=22a926c23821437492dc9530ea02be06&tp=MobileHotelSearch",
                    "auction_offer_key": "22a926c23821437492dc9530ea02be06"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "3.5",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "b07deab5-f796-469b-914d-b6f6bcfecb2c"
    },
    {
        "location_id": "301776",
        "name": "Welcomhotel by ITC Hotels, Cathedral Road, Chennai",
        "latitude": "13.045647",
        "longitude": "80.25693",
        "num_reviews": "1364",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/01/ee/0e/68/pool.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/ee/0e/68/pool.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/ee/0e/68/pool.jpg",
                    "height": "365"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/ee/0e/68/pool.jpg",
                    "height": "365"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/ee/0e/68/pool.jpg",
                    "height": "365"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2011-07-10T10:49:04-0400",
            "caption": "Pool",
            "id": "32378472",
            "helpful_votes": "2",
            "published_date": "2011-07-11T15:11:23-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.705799579620361",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "5",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#5 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.465288890675622",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$98 - $128",
        "neighborhood_info": [
            {
                "location_id": "20484197",
                "name": "Teynampet"
            },
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "unavailable",
            "offers": [],
            "all_booking_offers": []
        },
        "hotel_class": "4.5",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "f937c6a5-7f7a-4c3a-9fe3-b48e812b7049"
    },
    {
        "location_id": "736607",
        "name": "The Residency",
        "latitude": "13.045026",
        "longitude": "80.24054",
        "num_reviews": "1791",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/08/4a/fb/exterior.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/08/4a/fb/exterior.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "313",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/08/4a/fb/exterior.jpg",
                    "height": "231"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/08/4a/fb/exterior.jpg",
                    "height": "406"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/08/4a/fb/exterior.jpg",
                    "height": "185"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-05-08T00:54:19-0400",
            "caption": "Exterior",
            "id": "688409339",
            "helpful_votes": "0",
            "published_date": "2023-05-08T00:54:19-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.859831809997559",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "6",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#6 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.225710393910069",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$70 - $95",
        "neighborhood_info": [
            {
                "location_id": "13087510",
                "name": "T. Nagar"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "41340420",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=41340420&geo=736607&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=13&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=989AYcyjuM3XJOfAo_xISRhDFBhBGFMoTiNwTQdS8MGmZkuuP3EfKU8L2-Q3nfkMAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2dGkKn6MleyGg_eyDgqZQ6vsP09EJsUEFxITcuIAnRt2dZGSbjkolhIZZQb_Ff-szM-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12aef708d71b0d3ce7a2ab8db6daf8b19&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=93f00161b5e9450783c4c9aa9a5def38&tp=MobileHotelSearch",
                    "auction_offer_key": "93f00161b5e9450783c4c9aa9a5def38"
                },
                {
                    "content_id": "34577534",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34577534&geo=736607&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=13&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=mYaWgh0x_gg73QSGnZspiHqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM47FMHI2ylAIP3_GLAFbXdPliUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrMQYI2PZ1-1wTpUvaBUBK70Vbnplo1-rIJnfpDwdMD620Yc8FXfqHbUz2dY3dbWQ-2oWfNPoQbaYB-fEq7HtQvAIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=153188f55796f979e70b9fd37bfae06f9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=57b60e5b87084991a7602ea8dfe4b7a3&tp=MobileHotelSearch",
                    "auction_offer_key": "57b60e5b87084991a7602ea8dfe4b7a3"
                },
                {
                    "content_id": "32689902",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32689902&geo=736607&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=13&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=w8iMwlhjdiSdPtWnIWNDV2O9ZmiX9y04TJt583qVd7UB1sF8hyFIBlcuxe1qrZRFRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTkCUtd5OrcIaw8LKpjbq41_kGKe8fYnAHkqFXda1cqKn6wOcMVWLdnaZ1Pe_-LPl1iVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1db0c99c6c91820a60798dba3b6482448&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=26573cda403140b78eeb702c6838bf02&tp=MobileHotelSearch",
                    "auction_offer_key": "26573cda403140b78eeb702c6838bf02"
                },
                {
                    "content_id": "54242273",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=54242273&geo=736607&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=13&silo=11456&bucket=860112&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Y_KTqPg69YCAlm-LybLBVbLfaNMZSxyOrKyLQhqjoDq7ZAHPXMynjnSScAXxqfYTfJMRni2Dk8OerJncRq5nzX5W6PNHn5Drlcf0lw6WoNSgerFpHmIq__ycvcGn-MHqAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1eddccc217e2dc47f51b13653963bf07f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3626bb194b864398b728f940d3c24b53&tp=MobileHotelSearch",
                    "auction_offer_key": "3626bb194b864398b728f940d3c24b53"
                },
                {
                    "content_id": "79259123",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79259123&geo=736607&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=13&silo=13669&bucket=899272&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJ2qsP09ApFCpcCC0-hrP5dYjFj1KozGVwmbUclUCYW-OElSBlWY-SDz7mAO8EtX4M6ov9v5av-B-k6ZdvhlSCyUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c65e1e1f88d95abaf50c0b25d8391cd2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c8352f12ca064531832a21a767cb0732&tp=MobileHotelSearch",
                    "auction_offer_key": "c8352f12ca064531832a21a767cb0732"
                },
                {
                    "content_id": "60571605",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60571605&geo=736607&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=13&silo=35404&bucket=914257&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Xx4EUFsdy8Sd9TLZU6kwXczFApcrKciaAxmyE4czBD1pIl1NxBtBRiuPD4zprgGyiMShykcf-t_lImP_P3J01rijqwuCaGKOWVRl7pC4xUR_T2FgwkcaC044WcchOaeRyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ecf5bef39457b7d8b193103ef1f048fb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=86690ccb701245b88b95d1e46ec858a1&tp=MobileHotelSearch",
                    "auction_offer_key": "86690ccb701245b88b95d1e46ec858a1"
                },
                {
                    "content_id": "78926554",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78926554&geo=736607&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=13&silo=20728&bucket=862895&nrank=6&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=AHBmdLJbhdqEeBVWIRNZoC5DLuoDaRa2ZI0OmzCEsZUv0lEkquTtMOrwg-Maoa3t1X9GW9K-M6HKJsA2Rz8ZH6ArAV26wS-fhaFXSvevbiFuJ-ee_tLDFcCQKbJisIFrHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b28085d6283e538912217dfe6f87ad71&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=0eb84b75f29549b9a4e424820528c926&tp=MobileHotelSearch",
                    "auction_offer_key": "0eb84b75f29549b9a4e424820528c926"
                },
                {
                    "content_id": "42909873",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42909873&geo=736607&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=13&silo=17377&bucket=927871&nrank=8&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCbfYLg8OMMwq0yAm7ZkNZE5iMWPUqjMZXCZtRyVQJhb4Q-xA6t04cf75orswiYcAtjqi_2_lq_4H6Tpl2-GVILJQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18aff82cc896219cf3e6fa7e0380cef09&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8606cb9c3d3d4be5bb5172bfe878118f&tp=MobileHotelSearch",
                    "auction_offer_key": "8606cb9c3d3d4be5bb5172bfe878118f"
                },
                {
                    "content_id": "40367365",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=40367365&geo=736607&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=13&silo=5122&bucket=895087&nrank=9&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=nJlJl5L_JuwOZk-AboImx_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN47LolQcWNKHai7WWQOLGH3avbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTrzUWev8OeWJlkD_XH9CBVSPvt2WkN4OAbsVC-5pctAXB3-pmIzV141ckljLq3MtnolVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ea8da18fad2a47142aae9ca38b23ddac&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=4443ac592a8c48e3ab2b07d28ad1c4b4&tp=MobileHotelSearch",
                    "auction_offer_key": "4443ac592a8c48e3ab2b07d28ad1c4b4"
                },
                {
                    "content_id": "174640296",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174640296&geo=736607&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=13&silo=33308&bucket=966843&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=7XIy4BagYJrgZ5GP7Kx8W3E03JSctCrsDxgGV797TThBcFj9XhMRYhnJNagBvCNsk21v61sqXvz93mTka9QvzNL3UyCC3CiQklAa6X1LGEoIoxUNM_VHqR20kAQrYR5OyuR8TRxMXOmrct3yKQRVmeAC0twYSm-MHhoTSHF_7Sx76_Mv16GtWD72HnVRapAViVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17a58a9f6d4c461213e820a5ec68bbff2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ad1fadd9bd6c4e77ad845b99c9a5905f&tp=MobileHotelSearch",
                    "auction_offer_key": "ad1fadd9bd6c4e77ad845b99c9a5905f"
                },
                {
                    "content_id": "119919231",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119919231&geo=736607&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=13&silo=29510&bucket=884014&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z2yCKDd30k7VOysz0qUiF8iRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiQNBxT7ToGCJ9DKJ9Y11g2Ufi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1dc70912965d0cf4475c633a5ad681b17&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=7c58929f8da04aab857ac88cdcf14c56&tp=MobileHotelSearch",
                    "auction_offer_key": "7c58929f8da04aab857ac88cdcf14c56"
                },
                {
                    "content_id": "246440605",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246440605&geo=736607&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=13&silo=47774&bucket=998819&nrank=12&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNYjX5wJq4lUaC6QKpUil3hyAmOGyF4A_4yK8T9FTb_Rhl_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=188492dde90df4ae565bba12bbb8e03fb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=71eb3c7591c3469da19a1223b481ab4b&tp=MobileHotelSearch",
                    "auction_offer_key": "71eb3c7591c3469da19a1223b481ab4b"
                },
                {
                    "content_id": "105891776",
                    "provider_display_name": "ZenHotels.com",
                    "internal_provider_name": "ZenHotels",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/zenlogo.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "unavailable",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=ZenHotels&src=105891776&geo=736607&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=13&silo=24521&bucket=901414&nrank=10&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Lw_YmO3oNE9OPYFWE2JKyzNA2hV2owobK-HKwW45IIdz9Fxq7AVKCWfWSsCTzk_-1X9GW9K-M6HKJsA2Rz8ZH_NWnA2OJ0v2x8cJvwHlOkLKEe7r37lD9_3VZYzLseq1HR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=NOT_AVAILABLE&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=ac397ae9-ba41-49bb-bb84-301da2b2b00e&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f82b8771426aa0c790eb6417dfc7a1d3&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8cfe3b22ea4848d3a8ffd1b714cc4a11&tp=MobileHotelSearch",
                    "auction_offer_key": "8cfe3b22ea4848d3a8ffd1b714cc4a11"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "3.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "6e321172-e412-4b8d-9ece-d7a7a6b25e3f"
    },
    {
        "location_id": "304556",
        "ad_position": "inline1",
        "ad_size": "8X8",
        "doubleclick_zone": "as.india.tamil_nadu.chennai",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Chennai District",
                "abbrv": null,
                "location_id": "10745344"
            },
            {
                "subcategory": [
                    {
                        "key": "region",
                        "name": "Region"
                    }
                ],
                "name": "Tamil Nadu",
                "abbrv": null,
                "location_id": "297674"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "India",
                "abbrv": null,
                "location_id": "293860"
            }
        ],
        "detail": "0",
        "page_type": "hotels",
        "mob_ptype": "app_hotels"
    },
    {
        "location_id": "599793",
        "name": "The Residency Towers Chennai",
        "latitude": "13.040556",
        "longitude": "80.2438",
        "num_reviews": "3406",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/27/53/3c/the-residency-towers.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/27/53/3c/the-residency-towers.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "7007",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/27/53/3c/the-residency-towers.jpg",
                    "height": "4611"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/27/53/3c/the-residency-towers.jpg",
                    "height": "362"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/27/53/3c/the-residency-towers.jpg",
                    "height": "165"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-11-28T03:44:11-0500",
            "caption": "",
            "id": "438784828",
            "helpful_votes": "1",
            "published_date": "2019-11-28T03:44:11-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.816318035125732",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "7",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#7 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.292726013475479",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$92 - $123",
        "neighborhood_info": [
            {
                "location_id": "13087510",
                "name": "T. Nagar"
            },
            {
                "location_id": "21002058",
                "name": "Thyagaraya Nagar"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "40183564",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=40183564&geo=599793&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=13&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=aZ4Med43qwgpTwa22sfTzxhDFBhBGFMoTiNwTQdS8MFqXDT-Gya3pRDy20N-BzH3Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2XopWNmlVQ_tHC2GQLXZwwUW6CDjk9pyNXu8Pu_VDApGtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a3561c8a2ce8e9387ecb9b04ea713e10&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5bb17a9030bf439f80217796f735918d&tp=MobileHotelSearch",
                    "auction_offer_key": "5bb17a9030bf439f80217796f735918d"
                },
                {
                    "content_id": "34581090",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34581090&geo=599793&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=13&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=F7PFqD4eUp6Mww3onodzqnqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM41vK6XfO7PrUGiKYqtgq3iFiUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrx5mtu8fua4RtTIK5agivTkVbnplo1-rIJnfpDwdMD61mJvefVuYEdLEtFHSRD-lr3Tu3Apkh8XPrwTJeQlF7fQIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e2b8fc0383a7c4257b7c0342c26c2846&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=964e59a903c4412db92cc9beccdcc1ce&tp=MobileHotelSearch",
                    "auction_offer_key": "964e59a903c4412db92cc9beccdcc1ce"
                },
                {
                    "content_id": "32655134",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32655134&geo=599793&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=13&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=bOqmESzhoYYq0gZb1B-mVWO9ZmiX9y04TJt583qVd7Wyvtbz5Pk7h44z1igE_tt2RjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTRgVyEBKaFRZnoJkpafsVG9TUXkA4ZIzfzpGOCSJswg5Qla6_JlXfAsqc1R4THkBhiVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1485fa90ea5b52792c1f00734f9b0f5b0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b988c4bd6aad499f830c445e021c9741&tp=MobileHotelSearch",
                    "auction_offer_key": "b988c4bd6aad499f830c445e021c9741"
                },
                {
                    "content_id": "53942010",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53942010&geo=599793&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=13&silo=11456&bucket=860112&nrank=5&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=_WVT_lrFIqoSh9kG1DmLqXiWHJ2eEod-1ge1OCWd6lCclS00OfDmPovLJnk-goEnfJMRni2Dk8OerJncRq5nzf9WumhkJQFPOijtS_aTTIiUc7x0iBM5kU2UvcoUFrOfAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b61ef1decfd2db8c6fdb3c647622f84a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5c9bcbfc451048daa9452d6d835f500d&tp=MobileHotelSearch",
                    "auction_offer_key": "5c9bcbfc451048daa9452d6d835f500d"
                },
                {
                    "content_id": "209027843",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209027843&geo=599793&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=13&silo=41662&bucket=963192&nrank=4&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_BkaxzzksgPXT6NANAyB6htiMShykcf-t_lImP_P3J01oVn60FH0hgljqmXhF2m6A9GBG6OSnI1nrmL7xyQdtzryUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12e9679347e2cf64b035e030f308f37f4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=e494378762a74587815d5765ce43f980&tp=MobileHotelSearch",
                    "auction_offer_key": "e494378762a74587815d5765ce43f980"
                },
                {
                    "content_id": "115645259",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115645259&geo=599793&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=13&silo=13669&bucket=899272&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgKKsq6X72f96FsPGyryhQwAYjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3wxH4WbV8HROeiwNtlbCofTQUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e16fbcfd78918497b4245b973e3eae1e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2086aca297da4b589e9cfbaf8888b918&tp=MobileHotelSearch",
                    "auction_offer_key": "2086aca297da4b589e9cfbaf8888b918"
                },
                {
                    "content_id": "129721560",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129721560&geo=599793&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=13&silo=40511&bucket=944068&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOyuR8TRxMXOmrct3yKQRVmb7Vumu48kBvr_4u4mR6wRNG--ZIpXgOD0qoLBqGi2OotDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1588041905c84888b70ec4e0623cadd95&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5cb34fa1f9e7464ebfa12c3d28c7b47e&tp=MobileHotelSearch",
                    "auction_offer_key": "5cb34fa1f9e7464ebfa12c3d28c7b47e"
                },
                {
                    "content_id": "78925769",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78925769&geo=599793&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=13&silo=20728&bucket=862895&nrank=9&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=06pWC7R06cr-xxdWuWAM0IAf7aPRFY0CJOZuqoNiK1ibqROTAZAx6kDMLGG0CP5r1X9GW9K-M6HKJsA2Rz8ZH3IMv7bzAEuiGeEHs2Epgi9XDwvXPY6Fa3EvJ8NxckmxHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1df1b0d68f8dd949617ca03198c5dfce5&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a96637b446f74f23bd9a50f142eb9203&tp=MobileHotelSearch",
                    "auction_offer_key": "a96637b446f74f23bd9a50f142eb9203"
                },
                {
                    "content_id": "60538606",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60538606&geo=599793&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=13&silo=35404&bucket=914257&nrank=8&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=e498x5BZPVoGJxpVgAxrntTTUQrfjqKl6eMJab4ZAXpOANmAS8Nrct9xDK8QdTSZiMShykcf-t_lImP_P3J01op-VYcPN2dypFIAh7C9WO4L0cFe1IdxvtSkwdCAQckWyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a4a61316c8e06ce5d07b4da6258ce90f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=feb9ce71a0e840759cabcd78a5f2a164&tp=MobileHotelSearch",
                    "auction_offer_key": "feb9ce71a0e840759cabcd78a5f2a164"
                },
                {
                    "content_id": "39651757",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=39651757&geo=599793&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=13&silo=5122&bucket=895087&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4WCnBQRd13j9apujRpZro_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEv_ea2WkvwgInRn0FDWSqeuKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvvxUStYlD-sLwWwDV0rvUCuTKZYxgTwGMvCuOVoeux7m9WyYTwITk0toWlqqMShN4lVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a29898dd849ec3ba1318663f60f66a22&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=4a02d18bf4bb49aca74d684448a704a4&tp=MobileHotelSearch",
                    "auction_offer_key": "4a02d18bf4bb49aca74d684448a704a4"
                },
                {
                    "content_id": "42909996",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42909996&geo=599793&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=13&silo=17377&bucket=927871&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCbfYLg8OMMwq0yAm7ZkNZE5iMWPUqjMZXCZtRyVQJhb4KPfhliwexm1Fq2edY2CAAEfhZtXwdE56LA22VsKh9NBQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13084d8caddb589f1fd996ccfc6badcaa&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=87b6ae529fc84c33b7c53f1e7de9c887&tp=MobileHotelSearch",
                    "auction_offer_key": "87b6ae529fc84c33b7c53f1e7de9c887"
                },
                {
                    "content_id": "246441431",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246441431&geo=599793&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=13&silo=47774&bucket=998819&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNNb_7FnTDR-xsRiKRw-XsQsqMNICNrMEMjb1jYUpsD5ll_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fc2746f2168d5eba987764bf36836354&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c796c86c4c624b43b3582683744dcc0f&tp=MobileHotelSearch",
                    "auction_offer_key": "c796c86c4c624b43b3582683744dcc0f"
                },
                {
                    "content_id": "174641956",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174641956&geo=599793&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=13&silo=33308&bucket=894612&nrank=12&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=MbVbvyGy4UnlY3oRT_3iJEfUmuB981e0nceNnfiLXqQxT8MPwuXbEaeVCbEUpOCha9vOTqsnZEDK36UjKWHQ9_y_In_KwQAG3itlQRM5TqUlASme_ql4XHtTtjiwMoKopON-MgdoBiCVyE4Gc_YBUTdek_3TgHv8hYYiecO8YmCxZKGdke3Mdt6HE3lsnnZZwIYrpoOlnNxESAN67rOADHBuILdqQovyk5-HitwUBNqPDCdPHhb47mkWHMV-F9my2DZAAxgr5PzgwLgfcfRfcw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0fd5e14d-55bb-42a3-9666-7727af55075d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c598cce4c7e9d91e34b17490ab9fd806&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b21d92ac6f9b4bca9ce0908c44a2f829&tp=MobileHotelSearch",
                    "auction_offer_key": "b21d92ac6f9b4bca9ce0908c44a2f829"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "4.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "2e0b4312-7160-47c4-ac5d-c03945bb3945"
    },
    {
        "location_id": "302149",
        "name": "Taj Coromandel Chennai",
        "latitude": "13.058347",
        "longitude": "80.247505",
        "num_reviews": "3500",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/2e/71/d5/coromandel-exterior-high.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/2e/71/d5/coromandel-exterior-high.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1200",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/2e/71/d5/coromandel-exterior-high.jpg",
                    "height": "1200"
                },
                "large": {
                    "width": "450",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/2e/71/d5/coromandel-exterior-high.jpg",
                    "height": "450"
                },
                "medium": {
                    "width": "205",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/2e/71/d5/coromandel-exterior-high.jpg",
                    "height": "205"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-05-18T20:07:00-0400",
            "caption": "Coromandel Exterior High Res",
            "id": "690909653",
            "helpful_votes": "0",
            "published_date": "2023-05-18T20:07:00-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.90236234664917",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "8",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#8 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.2729402263481586",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$111 - $176",
        "neighborhood_info": [
            {
                "location_id": "13087590",
                "name": "Nungambakkam/Marina Beach"
            },
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "36226414",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=36226414&geo=302149&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=16&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=OkIz69CSICsB_uiZt3b4PBhDFBhBGFMoTiNwTQdS8MEeZ8WjJeFWu-BDhOJiO28_Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2aRbu6-9jCVOoj5WPGCx6T_sP09EJsUEFxITcuIAnRt2dZGSbjkolhIZZQb_Ff-szM-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14540f8ecc25e12b811548665e8081155&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a9b9eb553d6044e6ac6dec9d4309df18&tp=MobileHotelSearch",
                    "auction_offer_key": "a9b9eb553d6044e6ac6dec9d4309df18"
                },
                {
                    "content_id": "34520064",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34520064&geo=302149&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=16&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=DINKH0eMRQz2ec01r4IEHXqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM47zB4ByINCePIA0O8NYrpT1iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrg9bYC0D0aEJ3iK5u-hDWeUVbnplo1-rIJnfpDwdMD62EHM0_-V_UYD6XBBws1JnYy6RBm5RFgoxZ4dYe8C0_ywIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10b125b015c4f51adc0949e0db80bf173&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f18fa0a0448f4cdeb5f3970604bfe61c&tp=MobileHotelSearch",
                    "auction_offer_key": "f18fa0a0448f4cdeb5f3970604bfe61c"
                },
                {
                    "content_id": "32682473",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32682473&geo=302149&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=16&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=R7j0t3zIAt6kCJ-8SUW-0GO9ZmiX9y04TJt583qVd7W6UL7hofSc41GNM27PbfOkRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTKSmm7LY77GLLkPweQ0cko1z-217UGLIm-El58NScZ-3GTgaJsD9HyCpROGl3ExQmHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19757f63eac7dd1b6004b3d55ddbfc531&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2516fa04c15745dab2c60fb0edd34291&tp=MobileHotelSearch",
                    "auction_offer_key": "2516fa04c15745dab2c60fb0edd34291"
                },
                {
                    "content_id": "53931698",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53931698&geo=302149&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=16&silo=11456&bucket=860112&nrank=5&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YON-wOVNi3rJ-DfoAUBNJPRowFwYkrF7L8fh-YX3zo0gwa1gV5vfFCMsW4CYzGTGfJMRni2Dk8OerJncRq5nzVeR4HkRY0TsFFqxffbymo3hb1E8ZiH6bv8l-h1KAxAhAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=196c8279a478e0929ba4f4601a23e6ee2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=7b2c9a97f82142638baa1082c8b28b3c&tp=MobileHotelSearch",
                    "auction_offer_key": "7b2c9a97f82142638baa1082c8b28b3c"
                },
                {
                    "content_id": "207824881",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=207824881&geo=302149&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=16&silo=41662&bucket=963192&nrank=4&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_ArhaSGH7Nnip_ypuPGAfJA1X9GW9K-M6HKJsA2Rz8ZHyTb09K4v7By5FcEDt2A4MDhb1E8ZiH6bv8l-h1KAxAhAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a192c7e5bd01b85d6c5c184eefdfd768&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5f35254491ca409ca61fb1a47bb2a49c&tp=MobileHotelSearch",
                    "auction_offer_key": "5f35254491ca409ca61fb1a47bb2a49c"
                },
                {
                    "content_id": "79219234",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219234&geo=302149&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=16&silo=13669&bucket=899272&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJo6L128HNEmHLLZsCL7iO1YjFj1KozGVwmbUclUCYW-OElSBlWY-SDz7mAO8EtX4NzhhzzWkALmth9B9j0OImxUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10f7cac42990dec208b13572f9c6fd22a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=253712d3158245cbad886b33c8f9c397&tp=MobileHotelSearch",
                    "auction_offer_key": "253712d3158245cbad886b33c8f9c397"
                },
                {
                    "content_id": "60190896",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60190896&geo=302149&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=16&silo=35404&bucket=914257&nrank=8&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Xx4EUFsdy8Sd9TLZU6kwXczFApcrKciaAxmyE4czBD28Tq0P6fgBfYrYUKs12xLc1X9GW9K-M6HKJsA2Rz8ZHw0OVOaZ2nZtqvDheABQt0jhb1E8ZiH6bv8l-h1KAxAhAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1441f9881ee044dc655969234acf166a2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=1511a658bd3d48a38abf7a1eb1f67fa5&tp=MobileHotelSearch",
                    "auction_offer_key": "1511a658bd3d48a38abf7a1eb1f67fa5"
                },
                {
                    "content_id": "129731993",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129731993&geo=302149&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=16&silo=40511&bucket=944068&nrank=7&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOj2bj3mwvm6Y9GcXEeeqHGDuaf2qGP1mbqlA5TNSsA2bdYOa1NCUf-knmaySxD05-68spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ad48ef75204174a79f19542259a86331&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ed5e999612ff46e4a384b2c11f4ead6a&tp=MobileHotelSearch",
                    "auction_offer_key": "ed5e999612ff46e4a384b2c11f4ead6a"
                },
                {
                    "content_id": "205469983",
                    "provider_display_name": "Official Site",
                    "internal_provider_name": "WIHP",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/TAJ%20TA.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=WIHP&src=205469983&geo=302149&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=16&silo=14796&bucket=908542&nrank=10&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=-eXyaQZdM-PRSYWIxs1NSc5RNDunyzuraVLCWazTy-1aEKffBiJtWbnJnG4GSaGtC6oxYMGIQjDQmHIV5Gv3YitcFz05KuZ119oGXiLJUbBHfn8MlYTuTRrT5CaXjAtl8sYtFBZTGG0V1miRWqTZfm414k9fgm9S3gQ6bkbdXmKYhtszs8wEEYsYCnJ0vqORZfwwHYU9GCelHR7sjXNIRKPFkhKrrW75u_IJ1O4zGJL8-SzO95gHe1_rePiEgiBj&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18e2970932d51f37dfe2912c84d6788fb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a778b5a471254f9badfb800d8ec9b823&tp=MobileHotelSearch",
                    "auction_offer_key": "a778b5a471254f9badfb800d8ec9b823"
                },
                {
                    "content_id": "78873970",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78873970&geo=302149&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=16&silo=20728&bucket=862895&nrank=9&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Vj3mGU8GIZWx81HE3kyjbY0da9z1IFkE0V3FcX4fsrdPcTY-zSQu8JbBua1uBIqg1X9GW9K-M6HKJsA2Rz8ZH3IMv7bzAEuiGeEHs2Epgi9AZDv8ti-AJ4mYsr6T_ITPHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18c71d20f8d0b2bdd92a28e79567a74ef&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9baab7bf01bb4d8fb6215b9f78b43a62&tp=MobileHotelSearch",
                    "auction_offer_key": "9baab7bf01bb4d8fb6215b9f78b43a62"
                },
                {
                    "content_id": "176971580",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=176971580&geo=302149&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=16&silo=33308&bucket=894612&nrank=10&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=cuqv2kcn0MGGYIWmZ33zkGVclNY9LuHe68owdeF7R9qPRfhSrkXJpKePVZnNSjWV9r4qTI3WFXzTjn2q_RRA9BA9K7MmsroimglZYqrzLSx35B02EStXjmHgjnqCtNxvfGov6ztKywB8v6YVlHaK7mIxY9SqMxlcJm1HJVAmFvih4JdPJn13OwAkZ8PUENLFLjfZh83cP6YjqjpT6WLulnbs4Ja0pQrT3dabQvYhWpFAi8SdpvCclypO7c7zLAbs61UV-yi6ywqesvDCr-dX6g&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ef70fef74a5c40812a844b582fc34196&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=415076ec776d43c189756c6eeb090ad1&tp=MobileHotelSearch",
                    "auction_offer_key": "415076ec776d43c189756c6eeb090ad1"
                },
                {
                    "content_id": "56267342",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=56267342&geo=302149&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=16&silo=17377&bucket=927871&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCfZ22lyODHS7kgrOoK6kYow2mX1HYO_rIcJn6n79MaCGhr-XalLwDMXUNB2GVtbCc15pnv-5570IAFBIDzBFcT1-LvnfW3ZiUcmxdkDKjfLfmXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=112fd7ff7eb366eee07099ea330e86e89&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=db94d7f4579e40498f13510d68126473&tp=MobileHotelSearch",
                    "auction_offer_key": "db94d7f4579e40498f13510d68126473"
                },
                {
                    "content_id": "35830133",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=35830133&geo=302149&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=16&silo=5122&bucket=895087&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2iZF45bunWliL9nnDMMPc_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN4wkOL1mlgVLY2ZkgwFYZoE6vbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTspnW4cKy8g7ny8QL4bNSBJ1YGD5olWaWvPaMoyK3r4yLBRAEKaaehZ69k6xzkhoQsCGK6aDpZzcREgDeu6zgAxwbiC3akKL8pOfh4rcFATajwwnTx4W-O5pFhzFfhfZstg2QAMYK-T84MC4H3H0X3M&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18afdfa655d668e879942c0587ec77fae&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fbe27563824a476183887c627e5da3cb&tp=MobileHotelSearch",
                    "auction_offer_key": "fbe27563824a476183887c627e5da3cb"
                },
                {
                    "content_id": "119366646",
                    "provider_display_name": "Prestigia.com",
                    "internal_provider_name": "Prestigia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-prestigia-size-384-164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Prestigia&src=119366646&geo=302149&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=16&silo=5512&bucket=902885&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=WdhpVAF5cj9CAGGfp_oI4x5W2eTBloM3z1afNi3kVgNQXvWwzg-IDMJDhrE0tUAKnINEdRpRYZUUAVIk9pd5g0Vbnplo1-rIJnfpDwdMD61rsjHFoL5topuvW_15S7POc4Yc81pAC5rYfQfY9DiJsVBxdK21TSPG0d5O-fFmxI8PSjAxONImIfjmFeq8f3o7HQVQybncDKAuQBTopMBNpQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1cd22dd31908f8bcdb63c695d3b5b53d4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=880f071ba5154534818010ca73c19d53&tp=MobileHotelSearch",
                    "auction_offer_key": "880f071ba5154534818010ca73c19d53"
                },
                {
                    "content_id": "246442564",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246442564&geo=302149&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=16&silo=47774&bucket=998819&nrank=15&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2nAGtnPPDYm9gtgCzlSds92IxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJqqSmohBUg0VKMZahI6PrOBQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=181023dece3321d3d6413e1db3a8a521f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=491a523426694e6e9d100aed66549493&tp=MobileHotelSearch",
                    "auction_offer_key": "491a523426694e6e9d100aed66549493"
                },
                {
                    "content_id": "119897775",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119897775&geo=302149&from=HotelDateSearch_api&slot=16&matchID=1&oos=0&cnt=16&silo=29510&bucket=884014&nrank=15&crank=16&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z1ka7r7hqTSliEuhcRW8-iHRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiSmiwXsrD6hHYK9HWRteUQRfi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=74b4ee30-6644-42c3-90b0-bb717372a804&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1d7a6ed812a24066f8db7f293781f6943&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b29769dce61249cc8dfd434d497d382e&tp=MobileHotelSearch",
                    "auction_offer_key": "b29769dce61249cc8dfd434d497d382e"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": [
                {
                    "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=302149&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGR6pZVCB2cmDrIDcoKir4V2jYlL9pTEPTu93Z1FCbJRwA&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&bapid=1&cs=1be72ac434c3f2eb32ee95d7ec39e47ce",
                    "label": "Hotel website",
                    "type": "url"
                }
            ]
        },
        "special_offers": {
            "desktop": [],
            "mobile": [
                {
                    "headline": "Suite Celebrations",
                    "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.302149-a_offer.9800648-a_trafficSource.ba?adults=1&child_rm_ages=&inDay=27&inMonth=7&inYear=2023&outDay=28&outMonth=7&outYear=2023&rooms=1",
                    "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=302149&from=api&area=OID:9800648%7COT:4&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGSpEgu3Ofa4lFa1hk3QVBoDR3vmP3H2Dm4AkCJuxay38w&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&cs=186cc921436eacc284ed0412f5c911ecd"
                }
            ]
        },
        "listing_key": "bf80e64b-e21d-48bc-9a83-f9aec7254b06"
    },
    {
        "location_id": "563845",
        "name": "The Accord Metropolitan",
        "latitude": "13.046038",
        "longitude": "80.24259",
        "num_reviews": "3784",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1d/47/43/0b/the-accord-metropolitan.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1d/47/43/0b/the-accord-metropolitan.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1200",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1d/47/43/0b/the-accord-metropolitan.jpg",
                    "height": "628"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1d/47/43/0b/the-accord-metropolitan.jpg",
                    "height": "288"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1d/47/43/0b/the-accord-metropolitan.jpg",
                    "height": "131"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-07-06T10:56:12-0400",
            "caption": "",
            "id": "491209483",
            "helpful_votes": "0",
            "published_date": "2021-07-06T10:56:12-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.824639797210693",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "9",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#9 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.07708971361163",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$77 - $121",
        "neighborhood_info": [
            {
                "location_id": "13087510",
                "name": "T. Nagar"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "32462517",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=32462517&geo=563845&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=14&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=zQBNGEgVoDDBTWZchWy9rBhDFBhBGFMoTiNwTQdS8MEuSsSyfmAg3Ata2Sb11hNfAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2XopWNmlVQ_tHC2GQLXZwwUWicu7hAdO8pwH3JK_VAALgLEBLqeJ5NbMtgXeuMJmoSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15483fe68d0ea4532597ca3cd0d1935f6&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c2469f7cda5a4133b311cd2b7d3ec0a0&tp=MobileHotelSearch",
                    "auction_offer_key": "c2469f7cda5a4133b311cd2b7d3ec0a0"
                },
                {
                    "content_id": "35060647",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=35060647&geo=563845&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=14&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=F7PFqD4eUp6Mww3onodzqnqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM41vK6XfO7PrUGiKYqtgq3iFiUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrZRPz29Pr2PBVly95dyfUVEVbnplo1-rIJnfpDwdMD612bFBbmnYrzFt_kThrX6zUgLL9yAeJWH2d5LwebeAMXcoHegXwWh-TEiPKu51gqeWhHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1028caeefb221a893204c6b2133c1e140&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f9f2a399f4a644ada17b624e81742070&tp=MobileHotelSearch",
                    "auction_offer_key": "f9f2a399f4a644ada17b624e81742070"
                },
                {
                    "content_id": "32632840",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32632840&geo=563845&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=14&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=PS_N5nVi_ypyLFscYG-cn2O9ZmiX9y04TJt583qVd7W8-o4OBq89ruoMKnguyT0mRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTKrzex0rww-KxCQlmEt77V_kGKe8fYnAHkqFXda1cqKmuYCT8C2e4AgzhVXZve25kglGxLfm6yptyRAHWKkphUFpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18f9eb59d20cb59e95bf47cb18de017b0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=899dd2b8c01d481cbdf66e90480d8125&tp=MobileHotelSearch",
                    "auction_offer_key": "899dd2b8c01d481cbdf66e90480d8125"
                },
                {
                    "content_id": "209304036",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209304036&geo=563845&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=14&silo=41662&bucket=963192&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_ArhaSGH7Nnip_ypuPGAfJA1X9GW9K-M6HKJsA2Rz8ZHxCe_f48XfEEk-U-zZz4edc8JmojcXW7kRGc1j2l390qygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11e148bfae3364f6fdb581376a79fb33d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=737b579a7ed541d494ebfd24b1f03891&tp=MobileHotelSearch",
                    "auction_offer_key": "737b579a7ed541d494ebfd24b1f03891"
                },
                {
                    "content_id": "53938835",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53938835&geo=563845&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=14&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=jexf1oji3fLgfLKVOlqm_GWUKnhYialPiOZ2E8ZbKD0j3K10bRilm3KYlJMYx9qgfJMRni2Dk8OerJncRq5nzVeR4HkRY0TsFFqxffbymo08JmojcXW7kRGc1j2l390qygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13380c484d0e9729a7fdac2ac7b489e1d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a357f7049c7f4d2ca458eb21b79a8970&tp=MobileHotelSearch",
                    "auction_offer_key": "a357f7049c7f4d2ca458eb21b79a8970"
                },
                {
                    "content_id": "42910659",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42910659&geo=563845&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=14&silo=17377&bucket=895478&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=JJRfn12_1GrAF1cOEwjJPkawtslz1QA9xi_8POLEQ70u4RB4YR9P0gUo4MzYpiG7ANe_psLCGmiHl9BIPvc1jt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLqVkoPWrrvDC9d3pDzQlhl9FW56ZaNfqyCZ36Q8HTA-tsi0-el-o2VSFuONjfK28ltF5WeZnACfaVKZDqnIDfRVIQmWA0OgH7pUSLybt_3omrm4JRhwRKlFkQRGibvdC3p6nYGVyIJd3GAaUpV7f-4A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1d5e03c053a1175ff00c9d63305aeffe4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=841cbc0440fe4237bcf630229ae32194&tp=MobileHotelSearch",
                    "auction_offer_key": "841cbc0440fe4237bcf630229ae32194"
                },
                {
                    "content_id": "79219230",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219230&geo=563845&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=14&silo=13669&bucket=899272&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgLjl9yrtTMFc31iVnSHIdW8YjFj1KozGVwmbUclUCYW-P_1101meaCmtwX7AgP1e8-AzS9_tFqdrlcuFGzZgxVEUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1df9ca778f587bf2354fa0b237d8633fa&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c7cf84cbeac94590a4c3acb5c23a9118&tp=MobileHotelSearch",
                    "auction_offer_key": "c7cf84cbeac94590a4c3acb5c23a9118"
                },
                {
                    "content_id": "78895072",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78895072&geo=563845&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=14&silo=20728&bucket=862895&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=2lZZHg2uJ-ToOZw0V86VaXyXcoiLf6LADmX0ce-jjpj5zGcw4f-sqg8wv4Vq_t5H1X9GW9K-M6HKJsA2Rz8ZHwTU7K9b_RCyCqItjN-ktXCQJB0fGqlXWSlQjStLd-ptZC_CyRJ1AbwFlLlVWbQFF5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ff2a3302b3a31a92d39bb68e55b602df&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=96372d8cfb13466e9dd2f1394fb953c3&tp=MobileHotelSearch",
                    "auction_offer_key": "96372d8cfb13466e9dd2f1394fb953c3"
                },
                {
                    "content_id": "60371943",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60371943&geo=563845&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=14&silo=35404&bucket=914257&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=2CGWkaYoTrwHJLAOvxpGcAuWsLSLD46g84nOPXSwujk19dY8cFWPF9mEt5FIw-bU1X9GW9K-M6HKJsA2Rz8ZH73NgY8AalPgz1MVv3iUkJc8JmojcXW7kRGc1j2l390qygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fc26062920af7f09cdd2a679f6840f10&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d7a0d7bdadd5405595e93246fad586e2&tp=MobileHotelSearch",
                    "auction_offer_key": "d7a0d7bdadd5405595e93246fad586e2"
                },
                {
                    "content_id": "33222285",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=33222285&geo=563845&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=14&silo=5122&bucket=895087&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2iZF45bunWliL9nnDMMPc_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN4wkOL1mlgVLY2ZkgwFYZoE6vbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTspnW4cKy8g7ny8QL4bNSBJhSUtvTgchD_X9Gafcxd7Uyki-FKdb8bM4dVvtrkN3GoJRsS35usqbckQB1ipKYVBaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1017dd6ca139e39895ea21a86a4dda9a2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ccd3dc04b3414517972cf9546c2ed02f&tp=MobileHotelSearch",
                    "auction_offer_key": "ccd3dc04b3414517972cf9546c2ed02f"
                },
                {
                    "content_id": "129731577",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129731577&geo=563845&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=14&silo=40511&bucket=944068&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=AcaRFe75o7Rh_TcPtsnWjLv5FMffsxQed-28NMcwZNd3hQ8BxneOCo73jIfNk-HBJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOj2bj3mwvm6Y9GcXEeeqHGBlQGhe2Z4jnTJwcdsRrYYixydcOiNWh2IqPy-TGWWyID5__3NJR5QgH3RIcUrUtj8-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=190517fa3438ff6709964b8432fba5bf0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=cfb47101559a49e9a1f2df0a7c54dc83&tp=MobileHotelSearch",
                    "auction_offer_key": "cfb47101559a49e9a1f2df0a7c54dc83"
                },
                {
                    "content_id": "174637936",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174637936&geo=563845&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=14&silo=33308&bucket=894612&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=uDmIf07nMrB2ZxR7TQMCykfUmuB981e0nceNnfiLXqTswuoFH6EGZr0uZiQ6FDyXa9vOTqsnZEDK36UjKWHQ9_y_In_KwQAG3itlQRM5TqUlASme_ql4XHtTtjiwMoKoOlTcLJvSSK9Fr2pIw_5Ph7HLFMxwXwYxqAsNi58jOLitayJGsa88Ld5PtTer5lfzZC_CyRJ1AbwFlLlVWbQFF5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=168508056eb85b6e4a5e239b16e040c35&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=7fed6a43a65142939a49b80ad65b1915&tp=MobileHotelSearch",
                    "auction_offer_key": "7fed6a43a65142939a49b80ad65b1915"
                },
                {
                    "content_id": "119808999",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119808999&geo=563845&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=14&silo=29510&bucket=884014&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z1ka7r7hqTSliEuhcRW8-iHRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiSzyFvq49ZyFuu9XDkqcNovL1xsXbL04-_EtW1CFuylEZlwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1458bd70458f4557202d4c47c5fa0deff&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b7b397ed0d0249cfa708f317bc7bf6c7&tp=MobileHotelSearch",
                    "auction_offer_key": "b7b397ed0d0249cfa708f317bc7bf6c7"
                },
                {
                    "content_id": "246565619",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246565619&geo=563845&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=14&silo=47774&bucket=998819&nrank=13&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2nAGtnPPDYm9gtgCzlSds92IxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJoDNL3-0Wp2uVy4UbNmDFURQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=cef30f3f-9f06-4ec3-9698-b329fdfa768a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=185c98406557397cbb4c814060ed955e4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=28ea2d47cf954711a35f31c146da1e86&tp=MobileHotelSearch",
                    "auction_offer_key": "28ea2d47cf954711a35f31c146da1e86"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": [
                {
                    "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=563845&from=api&area=&slot=2&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGTdY2md9U6agZR4x9FL1tCUvJe7v-Jz06nI2Qfpj3iuUg&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&bapid=2&cs=18af0b06781f6711e02b72af1821794af",
                    "label": "Hotel website",
                    "type": "url"
                }
            ]
        },
        "special_offers": {
            "desktop": [],
            "mobile": [
                {
                    "headline": "3 DAYS ADVANCE PURCHASE & get 25% off on your room booking",
                    "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.563845-a_offer.9969595-a_trafficSource.ba?adults=1&child_rm_ages=&inDay=27&inMonth=7&inYear=2023&outDay=28&outMonth=7&outYear=2023&rooms=1",
                    "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=563845&from=api&area=OID:9969595%7COT:4&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGQXed_7f1E_M_zlIVUaWwO-SuWzv9Fwnm2O2lZDBvLzWw&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&cs=107b9b87cee716c3fc8cafb05929e2724"
                }
            ]
        },
        "listing_key": "836dcb7d-dca3-4163-a2dc-e7e897adaabc"
    },
    {
        "location_id": "3323053",
        "name": "The Leela Palace Chennai",
        "latitude": "13.0172",
        "longitude": "80.2735",
        "num_reviews": "4752",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/ac/df/32/the-leela-palace-chennai.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/ac/df/32/the-leela-palace-chennai.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/ac/df/32/the-leela-palace-chennai.jpg",
                    "height": "660"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/ac/df/32/the-leela-palace-chennai.jpg",
                    "height": "354"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/11/ac/df/32/the-leela-palace-chennai.jpg",
                    "height": "161"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2018-01-04T03:52:53-0500",
            "caption": "",
            "id": "296542002",
            "helpful_votes": "6",
            "published_date": "2018-01-04T03:52:53-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.878307342529297",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "10",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#10 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.885966941703829",
        "distance_string": null,
        "bearing": "south",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$$",
        "price": "$154 - $250",
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "43839933",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=43839933&geo=3323053&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=15&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=ygOfVv3qb5ip2gPR9zCg6hhDFBhBGFMoTiNwTQdS8MHe9y-mQI_-g2sBTMPvfdEXAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2bwZG4Wba0sEWSGqQQH2FX9-EsxtfEvX_dCr7w26NxvdtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1978aac30f0bd9fc25a847c13c9ce7b15&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=19935f878ec344dabd95a24c3f34db58&tp=MobileHotelSearch",
                    "auction_offer_key": "19935f878ec344dabd95a24c3f34db58"
                },
                {
                    "content_id": "43972769",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=43972769&geo=3323053&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=15&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=-P0a6Rxp3XR93kjLmYAFIXqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4obRNNRqUjrzN_9UVRiP0Z1iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrg9bYC0D0aEJ3iK5u-hDWeUVbnplo1-rIJnfpDwdMD60hSlPrRNY2zHQSCXSHH7FiVMi4-BUgqK_oX-nXPtfuMAIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19a45f92a2c0ebb938fea1fb48252d9f4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=069072549833493d8a8bf2c311f005f2&tp=MobileHotelSearch",
                    "auction_offer_key": "069072549833493d8a8bf2c311f005f2"
                },
                {
                    "content_id": "44157658",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=44157658&geo=3323053&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=15&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=V1IaWvxaLm_uW4celzBoxGO9ZmiX9y04TJt583qVd7WRj0Ux9iDK5xkqi6g69BotRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTvRg-Zab12o7E0c2MaYCiw1l11LoNoZqOwpsByRcyFDA1QD2xf6QerK6NSRd1f-OdtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c22a1b89cfdacfaed0a602b99f3ec43d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5a2dbe8d409b42c6b9ee10f890cbd638&tp=MobileHotelSearch",
                    "auction_offer_key": "5a2dbe8d409b42c6b9ee10f890cbd638"
                },
                {
                    "content_id": "173188826",
                    "provider_display_name": "Official Website",
                    "internal_provider_name": "SabreHotels",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Leela-Logo_384x164.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SabreHotels&src=173188826&geo=3323053&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=15&silo=6589&bucket=908661&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=3DT5tVDCSlvkK7xO0-ydnT5y_KbpoqdhH-mR2Oy_kl59yAbWuh7CIoY5X01MNj5jWJSbcU1r5v1BIoVBVV73uMsOS7WTn2Y1gcb0yiN8ps09hsLr3irJ2nS9wOdU-WjYfJMRni2Dk8OerJncRq5nzXI-Z8AmQHe93LVWoU2r-hzKjDSAjazBDI29Y2FKbA-ZZfwwHYU9GCelHR7sjXNIRKPFkhKrrW75u_IJ1O4zGJL8-SzO95gHe1_rePiEgiBj&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c0c9ebaeba9a75d29fb0227e9337f25b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ea27d063a1a5432db15b74c6bd78c5ec&tp=MobileHotelSearch",
                    "auction_offer_key": "ea27d063a1a5432db15b74c6bd78c5ec"
                },
                {
                    "content_id": "54267805",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=54267805&geo=3323053&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=15&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=T-MRLUB375NHNJMSar_NvIOq_3x0RkAp1-VaS2BjM3KeLXqsjlpnfCawz_8kmKCDfJMRni2Dk8OerJncRq5nzdFECzYUZph6akfZbgJIO_P4KbdSDzX-yyINlV2vTzkfAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18701b91a950d1fc3064745b42154246c&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=94c9b54468cf403e9bbd82b3e11a53df&tp=MobileHotelSearch",
                    "auction_offer_key": "94c9b54468cf403e9bbd82b3e11a53df"
                },
                {
                    "content_id": "209159680",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209159680&geo=3323053&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=15&silo=41662&bucket=963192&nrank=7&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_DsmoeD8tqYw_bxZ-KrAQYL1X9GW9K-M6HKJsA2Rz8ZH8Unfs-NpJvKTI6uzb8uTlP4KbdSDzX-yyINlV2vTzkfAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13b179c3dfd9679edb2ae44c187e03e69&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=09f77acb265b41048a1382f23521682e&tp=MobileHotelSearch",
                    "auction_offer_key": "09f77acb265b41048a1382f23521682e"
                },
                {
                    "content_id": "174639802",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174639802&geo=3323053&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=15&silo=33308&bucket=966843&nrank=6&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NvAsHBIEJthr7Q2Pi_G3BSdgTJK8HXfYRlfQuL7YLXyccqDNhZ9SaDwguZYkPI5AzUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5f0kze5P_AZyktI4Rn4hazWIxY9SqMxlcJm1HJVAmFvjfLAEnqtvSyBpgstjmU2r9LjfZh83cP6YjqjpT6WLulnbs4Ja0pQrT3dabQvYhWpFAi8SdpvCclypO7c7zLAbs61UV-yi6ywqesvDCr-dX6g&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19a96b0282db224c41f0c6ec2bb7449c0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=cac4a063705f4365a0404808e7829240&tp=MobileHotelSearch",
                    "auction_offer_key": "cac4a063705f4365a0404808e7829240"
                },
                {
                    "content_id": "49853617",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=49853617&geo=3323053&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=15&silo=17377&bucket=895478&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=JJRfn12_1GrAF1cOEwjJPkawtslz1QA9xi_8POLEQ70u4RB4YR9P0gUo4MzYpiG7ANe_psLCGmiHl9BIPvc1jt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLvm5OskCBVzc05hSmdIofH9FW56ZaNfqyCZ36Q8HTA-tIne6_oRX7VG95Dy5HPo0xDRoq3tQNk4ynmier8Hm1SF5XLOCgHnYdAypZxrAELZyrm4JRhwRKlFkQRGibvdC3p6nYGVyIJd3GAaUpV7f-4A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15f5301106c90a9a657014ca362bf6c88&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=e92d3fc28ecc4f69ac0ba07674a15cbd&tp=MobileHotelSearch",
                    "auction_offer_key": "e92d3fc28ecc4f69ac0ba07674a15cbd"
                },
                {
                    "content_id": "78952308",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78952308&geo=3323053&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=15&silo=20728&bucket=862895&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=-fzvpFMXGVE-D2b_NhxucZj0RjQIsugBgXg0xlvGolcMhnVzXROf-6rZU7O6mMqD1X9GW9K-M6HKJsA2Rz8ZH-COyyuyaQUsK6LgEwvszNHgkG5waxi0HCg1H19nZjTWHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e61f5ea77aca61a8dd618de23c905d93&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8e090feb0b1e4fb9b1c8b0274ce60793&tp=MobileHotelSearch",
                    "auction_offer_key": "8e090feb0b1e4fb9b1c8b0274ce60793"
                },
                {
                    "content_id": "60594337",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60594337&geo=3323053&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=15&silo=35404&bucket=914257&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=iyASaVfdnrE6IWRtBiB4kwLvYUB9kAnSd9a5XScMxtxShiaTrXVLitsrzBINZ9K31X9GW9K-M6HKJsA2Rz8ZH2UKLXQlkquBWsMohYkYMNf4KbdSDzX-yyINlV2vTzkfAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1642563afac0b1f1a84b49a9a68a2b3d6&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=7e86fc33c2d04f2bba4bb71a22bb15d4&tp=MobileHotelSearch",
                    "auction_offer_key": "7e86fc33c2d04f2bba4bb71a22bb15d4"
                },
                {
                    "content_id": "115637224",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115637224&geo=3323053&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=15&silo=13669&bucket=899272&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJo6L128HNEmHLLZsCL7iO1YjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3wzqR7PU5RDMyUuFLQFMFGQpUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ae4fc5832e1d0bc7f76d8bf5eaf45057&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d7ae4936333d4e6bab20ac7a49790e49&tp=MobileHotelSearch",
                    "auction_offer_key": "d7ae4936333d4e6bab20ac7a49790e49"
                },
                {
                    "content_id": "129751244",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129751244&geo=3323053&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=15&silo=40511&bucket=944068&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOKgnWR7tPU1YrpcGaG8p1shQhe-c57vxKo4UbMcg8LUmTsbRGhGcnXSL5BSw_1pW-68spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e403e3f58ef4a12abbbdad69a0b06796&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c0ab4658019f450699992b8a0d2bce2b&tp=MobileHotelSearch",
                    "auction_offer_key": "c0ab4658019f450699992b8a0d2bce2b"
                },
                {
                    "content_id": "43767808",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=43767808&geo=3323053&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=15&silo=5122&bucket=895087&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2iZF45bunWliL9nnDMMPc_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN4wkOL1mlgVLY2ZkgwFYZoE6vbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTk3dVhSlbwugZjATR5a4EuR1YGD5olWaWvPaMoyK3r4y8PFSxXsvhxzYwgoaIvzwO8CGK6aDpZzcREgDeu6zgAxwbiC3akKL8pOfh4rcFATajwwnTx4W-O5pFhzFfhfZstg2QAMYK-T84MC4H3H0X3M&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f1dd9cf8da0dfe6d418e6066816eea07&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d75b0c8fd14f4617a5d460bccdb1f9f7&tp=MobileHotelSearch",
                    "auction_offer_key": "d75b0c8fd14f4617a5d460bccdb1f9f7"
                },
                {
                    "content_id": "119900025",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119900025&geo=3323053&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=15&silo=29510&bucket=884014&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z3hRMNVY9mYgUHXg0_ZwXyLRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiQP3deS_Hk277_M5kssj41lfi7531t2YlHJsXZAyo3y35lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17a39c585aa37022836de738d83acc4b5&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c7d36af29d4b458d8762134ce1724be6&tp=MobileHotelSearch",
                    "auction_offer_key": "c7d36af29d4b458d8762134ce1724be6"
                },
                {
                    "content_id": "246440258",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246440258&geo=3323053&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=15&silo=47774&bucket=998819&nrank=14&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2iVoo0UKSNX-_dmSa9UUaZiIxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJupHs9TlEMzJS4UtAUwUZClQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=6f95c9b3-f605-409b-8754-322dd00167b3&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1040749122f56ca743c7e464ecc8732b7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f93255ab3c384b888e444128a13e9f83&tp=MobileHotelSearch",
                    "auction_offer_key": "f93255ab3c384b888e444128a13e9f83"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "f5f07c4e-2e9b-4906-9a9c-342bf42accb2"
    },
    {
        "location_id": "1872115",
        "name": "Hyatt Regency Chennai",
        "latitude": "13.042895",
        "longitude": "80.248566",
        "num_reviews": "6296",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/c5/36/0a/exterior.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/c5/36/0a/exterior.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1023",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/c5/36/0a/exterior.jpg",
                    "height": "682"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/c5/36/0a/exterior.jpg",
                    "height": "367"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/c5/36/0a/exterior.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-07-16T16:42:22-0400",
            "caption": "Exterior",
            "id": "700790282",
            "helpful_votes": "0",
            "published_date": "2023-07-16T16:42:22-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.790518283843994",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "11",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#11 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.959756778422636",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$90 - $131",
        "neighborhood_info": [
            {
                "location_id": "20484197",
                "name": "Teynampet"
            },
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "38623413",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=38623413&geo=1872115&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=16&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=hFIsGf1hCNE3n6KxFnKFCRhDFBhBGFMoTiNwTQdS8MGOrIXlzMqaiG9jup6yUZUrAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96IFaHoY-ZSTf3cRNbQySHF0I6m93mIyKzeY45FCAFQca2Ae7R_ZuRrK9wVk1XGz3MfcjTYzf-pkQXUeRYih_VXc-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fdc0770af8a8a4035d7c50e9bd365651&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=4cbcf26e23d3457eb112702a8cb377b1&tp=MobileHotelSearch",
                    "auction_offer_key": "4cbcf26e23d3457eb112702a8cb377b1"
                },
                {
                    "content_id": "34601034",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34601034&geo=1872115&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=16&silo=6103&bucket=901739&nrank=3&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9eCrX_wyGWr0sc7UmoZo33qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4qqZWxtwACpBBOyy9LBHEXViUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrZRPz29Pr2PBVly95dyfUVEVbnplo1-rIJnfpDwdMD62R4awnSiI0o8Q79Fmi-MSyj9-po2pI3dY7Pm59P6a3fbxb8FydJ75Cdj8579yK-5ChHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1180d54f291ecd77077194b16984fc96e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=661456fc57b345a39235c5511a54cb06&tp=MobileHotelSearch",
                    "auction_offer_key": "661456fc57b345a39235c5511a54cb06"
                },
                {
                    "content_id": "33299617",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=33299617&geo=1872115&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=16&silo=4310&bucket=910482&nrank=2&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=W4zNGcQxviPQpZCizBUxPGO9ZmiX9y04TJt583qVd7XG-iTT7qy5GQlqTUz4XjeeRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTKrzex0rww-KxCQlmEt77V1iGjBlYfXq2f0AC_S0VCHqgkfj9PdaEJhrqbx9JAW4xMJlzb3Ek8xXVYz7-uNtrY1pdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=198fca2b306ff4825a61bf43bc5d5bcf1&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9542d74199cd4e008f1687bcf5aa862a&tp=MobileHotelSearch",
                    "auction_offer_key": "9542d74199cd4e008f1687bcf5aa862a"
                },
                {
                    "content_id": "45069133",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=45069133&geo=1872115&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=16&silo=17377&bucket=895478&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NBowHJuiVJ02KqSD9RyhREawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvJA_JVUBnG0kfuqfNyWSSNt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLk5sgSSaYWBc3OvIg-WLkHg2mX1HYO_rIcJn6n79MaCGgDZueZzeHL1nO1if_BKP5_E5uJ-7KF_cWoc6vcujnY6asLZdfZlAARHXcvr8pVd3mXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18e56cae6720da27d54f42f365aa627b1&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=86e027d0f251475eb246a127f8730804&tp=MobileHotelSearch",
                    "auction_offer_key": "86e027d0f251475eb246a127f8730804"
                },
                {
                    "content_id": "201602940",
                    "provider_display_name": "Hyatt.com",
                    "internal_provider_name": "Hyatt",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/hyattintl_384164.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Hyatt&src=201602940&geo=1872115&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=16&silo=11650&bucket=894832&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=78MHmeTbsJniMCkVq4-WexIUHSTFFH8U1nYLHcfgrJwN9z9dMuOXYQKUQtSzeN9--kz6J0diX6tXyr0pO3pYF-_viznBy3vU68DfTBMe_stgCGdppRvg49Zl8__e1KWT9zySkiR4xxAaWAgWhUo8cf7Zj2-dwJkpHLxNE1bBqlc5f2rB6DdmwZGE-2kgm2WvMJlzb3Ek8xXVYz7-uNtrY1pdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=196ea7625c1349d2473060ed37e22455d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=291380112a414dc2ac3988e241d9595c&tp=MobileHotelSearch",
                    "auction_offer_key": "291380112a414dc2ac3988e241d9595c"
                },
                {
                    "content_id": "53961472",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53961472&geo=1872115&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=16&silo=11456&bucket=860112&nrank=7&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=_WVT_lrFIqoSh9kG1DmLqXiWHJ2eEod-1ge1OCWd6lBHGu9lkp5jcTibTyz0-69FfJMRni2Dk8OerJncRq5nzf9WumhkJQFPOijtS_aTTIinCh1tsNOm2AhDtkjDUwGZvFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1150323edb002c26f1d01bfeac118902f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=4f98b98bc2b94ca9b82ace34f2173d28&tp=MobileHotelSearch",
                    "auction_offer_key": "4f98b98bc2b94ca9b82ace34f2173d28"
                },
                {
                    "content_id": "208995637",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=208995637&geo=1872115&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=16&silo=41662&bucket=963192&nrank=6&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_BkaxzzksgPXT6NANAyB6htiMShykcf-t_lImP_P3J01oVn60FH0hgljqmXhF2m6A-5OKZiZnanV1RtMKYhFp9xirD5rb9qJ_7JSyEi53_uyLs6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1bf732cc1b2be7d2a33b1b9097c8141b9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=902b27b47ac24a2cac828c1597a4ee25&tp=MobileHotelSearch",
                    "auction_offer_key": "902b27b47ac24a2cac828c1597a4ee25"
                },
                {
                    "content_id": "115627591",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115627591&geo=1872115&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=16&silo=13669&bucket=899272&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgKKsq6X72f96FsPGyryhQwAYjFj1KozGVwmbUclUCYW-JC4q7snKxClW2Rx9UBeRsEExH4llhNBBFtbTkuTa9ZHUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17f08b3c2a47d5a16546dfc914e8abd7d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3d1850804dbd491ca37b8be221d387e5&tp=MobileHotelSearch",
                    "auction_offer_key": "3d1850804dbd491ca37b8be221d387e5"
                },
                {
                    "content_id": "78940367",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78940367&geo=1872115&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=16&silo=20728&bucket=862895&nrank=11&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=06pWC7R06cr-xxdWuWAM0IAf7aPRFY0CJOZuqoNiK1ibqROTAZAx6kDMLGG0CP5r1X9GW9K-M6HKJsA2Rz8ZH3IMv7bzAEuiGeEHs2Epgi-Cwtazn712vuVP_2YzKVKybwHk6AyRdFpms6pScXfYQ5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=145dd2875652c517caccd9030c4c2c967&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ad94ea46b37845e281cbb59c691fbf24&tp=MobileHotelSearch",
                    "auction_offer_key": "ad94ea46b37845e281cbb59c691fbf24"
                },
                {
                    "content_id": "129721980",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129721980&geo=1872115&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=16&silo=40511&bucket=944068&nrank=9&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOyuR8TRxMXOmrct3yKQRVmRlS8GyZ3XSxAfgOzJVywdomuiYZqkTZuuI8q37CK9rHyg_oq2LCjoNXdrZPkkNNkSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15bd59eb01848aedd80ca97d5ffb2fcd3&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2954d7e9d1e9418a841487b6acfde6c3&tp=MobileHotelSearch",
                    "auction_offer_key": "2954d7e9d1e9418a841487b6acfde6c3"
                },
                {
                    "content_id": "60502347",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60502347&geo=1872115&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=16&silo=35404&bucket=914257&nrank=10&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=e498x5BZPVoGJxpVgAxrntTTUQrfjqKl6eMJab4ZAXpOANmAS8Nrct9xDK8QdTSZiMShykcf-t_lImP_P3J01op-VYcPN2dypFIAh7C9WO65OKZiZnanV1RtMKYhFp9xirD5rb9qJ_7JSyEi53_uyLs6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13d81258fcf291884c48a480b6504b4ad&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=400bb4ab30a946cc9708cb685dfcc532&tp=MobileHotelSearch",
                    "auction_offer_key": "400bb4ab30a946cc9708cb685dfcc532"
                },
                {
                    "content_id": "38859113",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=38859113&geo=1872115&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=16&silo=5122&bucket=895087&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4WCnBQRd13j9apujRpZro_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEv_ea2WkvwgInRn0FDWSqeuKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvvxUStYlD-sLwWwDV0rvUAI4nHLNRo0p6sT9d_a_4Wudme3Ubj4m7Nd1OekiqZjlTCZc29xJPMV1WM-_rjba2NaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18489f9cf301a64566472d05787dc9082&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9e588a968f3244468b1a6cc15f822875&tp=MobileHotelSearch",
                    "auction_offer_key": "9e588a968f3244468b1a6cc15f822875"
                },
                {
                    "content_id": "239282724",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=239282724&geo=1872115&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=16&silo=33308&bucket=966843&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=78nGlvUvdvG2XzYIxeqfuCdgTJK8HXfYRlfQuL7YLXxW_0A4aGI7TTFyJhOMsFg9zUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5hz9aBGgkN26UYQ7tDDg7AX6wUwBnZMvzqFoNvEq_hZ5c2HwAExjbs24Rm-jk6czPyg_oq2LCjoNXdrZPkkNNkSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f8ce8135d99d41da7cea5a2162b8e0be&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=65c1b235e93845a287eb41e3516bf2c2&tp=MobileHotelSearch",
                    "auction_offer_key": "65c1b235e93845a287eb41e3516bf2c2"
                },
                {
                    "content_id": "119366594",
                    "provider_display_name": "Prestigia.com",
                    "internal_provider_name": "Prestigia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-prestigia-size-384-164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Prestigia&src=119366594&geo=1872115&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=16&silo=5512&bucket=902885&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=WdhpVAF5cj9CAGGfp_oI4x5W2eTBloM3z1afNi3kVgNQXvWwzg-IDMJDhrE0tUAK2TNasknuBGT-WS6ozVyz9zaZfUdg7-shwmfqfv0xoIaj2-vXYrhuIaDPKisNghYa13mjvyMyy8D70zFn42jOj2X8MB2FPRgnpR0e7I1zSESjxZISq61u-bvyCdTuMxiS_PkszveYB3tf63j4hIIgYw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a4f5a5ee1a0efb817c4671350ab4ebec&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b7efd4ccfae1472b9721987109a8a22c&tp=MobileHotelSearch",
                    "auction_offer_key": "b7efd4ccfae1472b9721987109a8a22c"
                },
                {
                    "content_id": "150240312",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=150240312&geo=1872115&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=16&silo=29510&bucket=884014&nrank=15&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z11xmrMD81QPcGfmjXlO7giRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiQWbQE199i8vCas_5BmM3JImrC2XX2ZQAER13L6_KVXd5lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=108a0bd57e450e9e249d92e9c3e13642d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bb5047b370f0407e86369b8a27a652c8&tp=MobileHotelSearch",
                    "auction_offer_key": "bb5047b370f0407e86369b8a27a652c8"
                },
                {
                    "content_id": "246438019",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246438019&geo=1872115&from=HotelDateSearch_api&slot=16&matchID=1&oos=0&cnt=16&silo=47774&bucket=998819&nrank=15&crank=16&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNNb_7FnTDR-xsRiKRw-XsQtd5o78jMsvA-9MxZ-Nozo9l_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=5d846d4b-2e97-40e4-9929-74eebb1bd37a&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13d4c4aade5c50072515107d9ee0dfd16&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fb8e111645da46ccb4fe6510c5ce0cb2&tp=MobileHotelSearch",
                    "auction_offer_key": "fb8e111645da46ccb4fe6510c5ce0cb2"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "2dbcaaeb-60aa-42e4-9d00-4e7b31791c07"
    },
    {
        "location_id": "304802",
        "name": "Taj Connemara, Chennai",
        "latitude": "13.063066",
        "longitude": "80.26167",
        "num_reviews": "2823",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/8c/33/1f/facade.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/8c/33/1f/facade.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2048",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/8c/33/1f/facade.jpg",
                    "height": "896"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/8c/33/1f/facade.jpg",
                    "height": "241"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/8c/33/1f/facade.jpg",
                    "height": "109"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-06-22T19:10:04-0400",
            "caption": "Facade",
            "id": "697053983",
            "helpful_votes": "0",
            "published_date": "2023-06-22T19:10:04-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.7978129386901855",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "12",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#12 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "2.3340311615935008",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$85 - $147",
        "neighborhood_info": [
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "35109725",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=35109725&geo=304802&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=13&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=Pf3SlmpRWjwgcytYJiKvDhhDFBhBGFMoTiNwTQdS8MG7h9siQCzGAxXBDnPd1wIEAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2YLC-yBwtPfzAUuZYZdatALsP09EJsUEFxITcuIAnRt2fcjTYzf-pkQXUeRYih_VXc-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e5e87af40abf81dbd14e0a7997d24dc9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=929bbf22dd9f4d1c94064ff88bd55cf4&tp=MobileHotelSearch",
                    "auction_offer_key": "929bbf22dd9f4d1c94064ff88bd55cf4"
                },
                {
                    "content_id": "34527998",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34527998&geo=304802&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=13&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=V8TP8If3XShtd-f8Qwmn63qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4gjtFHyN0JULvekNXdoJ_5FiUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrZRPz29Pr2PBVly95dyfUVEVbnplo1-rIJnfpDwdMD61Buq20vuumu5Tcbt-RMbRggLL9yAeJWH2d5LwebeAMXbxb8FydJ75Cdj8579yK-5ChHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1006e23c64e4e6c29c0fe1bfa36473075&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=dec1d5c2717a4fd7bfa0208310fe6429&tp=MobileHotelSearch",
                    "auction_offer_key": "dec1d5c2717a4fd7bfa0208310fe6429"
                },
                {
                    "content_id": "32618396",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32618396&geo=304802&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=13&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=Ew2BaXwyIlrpEstK4MgJy2O9ZmiX9y04TJt583qVd7WibvFmZta8EWm50NO1WhhuRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTRgVyEBKaFRZnoJkpafsVG8lH8lTmvmiybJcJaYBoGMjrpBgxcJ_cwNZ8cCR7uDw6MJlzb3Ek8xXVYz7-uNtrY1pdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1104240a33602a447d76230be3c838cfb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=27708f5b7bd04b218570efabc32492dd&tp=MobileHotelSearch",
                    "auction_offer_key": "27708f5b7bd04b218570efabc32492dd"
                },
                {
                    "content_id": "56267534",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=56267534&geo=304802&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=13&silo=17377&bucket=895478&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=yY16H34sWLS9U2gQzZz1ZUawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvUlU29tqkSC3zSP7-3lzfV90COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLqVkoPWrrvDC9d3pDzQlhl9FW56ZaNfqyCZ36Q8HTA-tEKONAM_IY7bJ2em8RDp9YDmFATd74r216m-pU-dW6qHFO2C-bx92m4Bx-HPNvt27rm4JRhwRKlFkQRGibvdC3p6nYGVyIJd3GAaUpV7f-4A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ba784c666491bad430e521339a0a2b08&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a38e8685b46440b0bc3766844dfeeb4d&tp=MobileHotelSearch",
                    "auction_offer_key": "a38e8685b46440b0bc3766844dfeeb4d"
                },
                {
                    "content_id": "53932140",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53932140&geo=304802&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=13&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=OKItl4s3OZNlqukq-exirCxRGOrFH1nG9yD3zBAXfAT5o58Y13xHmkV1iA7-Wfe1fJMRni2Dk8OerJncRq5nzdFECzYUZph6akfZbgJIO_MArY10FpV9xIBbQN5vkxuyvFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19b979553dcab79f7d08768980d70918b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=968ccd83980f4d81ad2f103b84978404&tp=MobileHotelSearch",
                    "auction_offer_key": "968ccd83980f4d81ad2f103b84978404"
                },
                {
                    "content_id": "208987899",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=208987899&geo=304802&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=13&silo=41662&bucket=963192&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_ArhaSGH7Nnip_ypuPGAfJA1X9GW9K-M6HKJsA2Rz8ZHyTb09K4v7By5FcEDt2A4MAArY10FpV9xIBbQN5vkxuyvFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11a3c5c268e23a48e124d0b50cb768f7b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=4b1f849104934cfbb031b40751f1bbb8&tp=MobileHotelSearch",
                    "auction_offer_key": "4b1f849104934cfbb031b40751f1bbb8"
                },
                {
                    "content_id": "79219236",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219236&geo=304802&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=13&silo=13669&bucket=899272&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgLjl9yrtTMFc31iVnSHIdW8YjFj1KozGVwmbUclUCYW-OAdFpBpn-3BMdYsRSgRrCWtOhW_bFxW8aTlrKOJilMJUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1371c72f4e1e48f2da3e1b81c856527e3&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6f65522b849e49cb979f970056c306be&tp=MobileHotelSearch",
                    "auction_offer_key": "6f65522b849e49cb979f970056c306be"
                },
                {
                    "content_id": "78873498",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78873498&geo=304802&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=13&silo=20728&bucket=862895&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=ixTnydX-eBpLthIqBRp6cz-ca3Aa7nrbgD0jKMiNo3I7vsD-ujplFr64UFJMHbEU1X9GW9K-M6HKJsA2Rz8ZH6Uq3QwbdVgQNsmQklTGJFt0dvWEDsg5ChiZxRLgkIAybwHk6AyRdFpms6pScXfYQ5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19e8d7756105ca27679026eda9f9db3a2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=867ceae55b924ef486698e9f021568ce&tp=MobileHotelSearch",
                    "auction_offer_key": "867ceae55b924ef486698e9f021568ce"
                },
                {
                    "content_id": "60190822",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60190822&geo=304802&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=13&silo=35404&bucket=914257&nrank=8&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=ZTfC65apylFz5x2Dz0e-pOdggPSbiXgucycRdAId4XAzcX1DJKC0STCYP7QGoRE51X9GW9K-M6HKJsA2Rz8ZH12Kq3ytovqRkTPrIlzEYAYArY10FpV9xIBbQN5vkxuyvFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=144259530d6e61f9531915d7612944a92&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2f14348b750c4ae4b00c48c222356ba6&tp=MobileHotelSearch",
                    "auction_offer_key": "2f14348b750c4ae4b00c48c222356ba6"
                },
                {
                    "content_id": "205469977",
                    "provider_display_name": "Official Site",
                    "internal_provider_name": "WIHP",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/TAJ%20TA.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=WIHP&src=205469977&geo=304802&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=13&silo=14796&bucket=908542&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=-eXyaQZdM-PRSYWIxs1NSc5RNDunyzuraVLCWazTy-1aEKffBiJtWbnJnG4GSaGtC6oxYMGIQjDQmHIV5Gv3YitcFz05KuZ119oGXiLJUbBHfn8MlYTuTRrT5CaXjAtlfwzZZerWwNt19NeAahI6xVXIPswOrwqN6v_KPxiK3kF3IPDBEFohjw3AQgnd4JzYZfwwHYU9GCelHR7sjXNIRKPFkhKrrW75u_IJ1O4zGJL8-SzO95gHe1_rePiEgiBj&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16b2062a2c8b439a501326418e640d378&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=719071dde85b49a7aa0c66aed7dda9bb&tp=MobileHotelSearch",
                    "auction_offer_key": "719071dde85b49a7aa0c66aed7dda9bb"
                },
                {
                    "content_id": "35830134",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=35830134&geo=304802&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=13&silo=5122&bucket=895087&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2iZF45bunWliL9nnDMMPc_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN4wkOL1mlgVLY2ZkgwFYZoE6vbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTspnW4cKy8g7ny8QL4bNSBKPvt2WkN4OAbsVC-5pctAXyki-FKdb8bM4dVvtrkN3GjCZc29xJPMV1WM-_rjba2NaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14e8256c71983a0b8f78e4b3e18e1be85&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c3af409346ea4ade8c6fa33b058e7eef&tp=MobileHotelSearch",
                    "auction_offer_key": "c3af409346ea4ade8c6fa33b058e7eef"
                },
                {
                    "content_id": "177118883",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=177118883&geo=304802&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=13&silo=33308&bucket=894612&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=DdKQLtTDv0wZl1T3MdnWKN4ZxM9kg6UdcEn_aWgw1Vs1p_q5dKqR4QwGW3tVqAZyUplBNyVTa6yxUkFLTwLDoSBG4Za7ZW6SlcHYShs8nars8QK9olkjzL3gsY9rO-0Hj2bj3mwvm6Y9GcXEeeqHGFUcOs5a--qi5zszvDp8t4iji8z6OxdP-3U8G3KWaGFHfcjTYzf-pkQXUeRYih_VXc-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a03cd6d00761c2c25778c7c7e8656019&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9effb6fa9138478fa46f0bf79d2c97c1&tp=MobileHotelSearch",
                    "auction_offer_key": "9effb6fa9138478fa46f0bf79d2c97c1"
                },
                {
                    "content_id": "119939795",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119939795&geo=304802&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=13&silo=29510&bucket=884014&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z1ka7r7hqTSliEuhcRW8-iHRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiRwJxDrSwgJH6g0KHypq6jJmrC2XX2ZQAER13L6_KVXd5lwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=17337895-5ac1-4d98-ba3b-f33c1c78df94&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1bd7b3e0b24fd635efb4f09d53228ae14&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a5fe3ef591f54212846212b7ffcaa172&tp=MobileHotelSearch",
                    "auction_offer_key": "a5fe3ef591f54212846212b7ffcaa172"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": [
                {
                    "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=304802&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGSoLQpT84MGy5s4WwuEKmxeUq1kZ8VFxqb5w5KFz3PmIg&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&bapid=1&cs=14db7d4596cdbae36314d32806f006c9f",
                    "label": "Hotel website",
                    "type": "url"
                }
            ]
        },
        "special_offers": {
            "desktop": [],
            "mobile": [
                {
                    "headline": "Book Direct & Save",
                    "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.304802-a_offer.9920019-a_trafficSource.ba?adults=1&child_rm_ages=&inDay=27&inMonth=7&inYear=2023&outDay=28&outMonth=7&outYear=2023&rooms=1",
                    "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=304802&from=api&area=OID:9920019%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGSf8Vuox_QjVPKcq05T-Yb6n9-eTJf64V0DbxGH97LHEw&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&cs=15a3b0cb0d7412f37ab0faa7113ff8fd1"
                }
            ]
        },
        "listing_key": "58faf564-1c41-4861-9667-8248cead7fac"
    },
    {
        "location_id": "1840696",
        "name": "The Raintree Hotel Anna Salai",
        "latitude": "13.033858",
        "longitude": "80.2441",
        "num_reviews": "2282",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/5f/da/18/exterior-view.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/5f/da/18/exterior-view.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1023",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/5f/da/18/exterior-view.jpg",
                    "height": "516"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/5f/da/18/exterior-view.jpg",
                    "height": "277"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/21/5f/da/18/exterior-view.jpg",
                    "height": "126"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-11-12T01:38:55-0500",
            "caption": "Exterior view",
            "id": "559929880",
            "helpful_votes": "0",
            "published_date": "2021-11-12T01:38:55-0500",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.84318208694458",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "13",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#13 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.634971892099818",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$77 - $98",
        "neighborhood_info": [
            {
                "location_id": "21002056",
                "name": "Alwarpet South"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "34598533",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34598533&geo=1840696&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=15&silo=6103&bucket=901739&nrank=2&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=wzyP9DBiEVcfUNJLQXju5nqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4Y1jO3e6dWbAFfH54v33kJ1iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrN7KrvWQUbZJrCZtvVQPmpkVbnplo1-rIJnfpDwdMD61Xa04imZjmdrRSAksQtLGnWfhWSh3CL8IoI-Z2X-kxfPd__fLOtpaHB3_kGBrmhu27Om8xXkTTHP_ZuVaLQiWBYWSZBbGuElZrQK6spv_yIw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=179261788e1425dbfa7af994457d5c14a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=231946ac50ba4a3a8b42726929ed41b4&tp=MobileHotelSearch",
                    "auction_offer_key": "231946ac50ba4a3a8b42726929ed41b4"
                },
                {
                    "content_id": "32491429",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=32491429&geo=1840696&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=15&silo=10500&bucket=903023&nrank=1&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=ViHtxssRylIiw9WdjNwGWBhDFBhBGFMoTiNwTQdS8MFPMMWVFck1TsxqFUeFDdF3Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96izjRqrbNtfmJwgmsuVEYlAFItcUm7V2Ppnw-71ir-Uz2x0rUmBStGhxWZKLIlnSJglGxLfm6yptyRAHWKkphUFpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15d7a0605f65c885e7c15894454e3e307&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=49e00de1228a49439f4a33805b8db809&tp=MobileHotelSearch",
                    "auction_offer_key": "49e00de1228a49439f4a33805b8db809"
                },
                {
                    "content_id": "32701942",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32701942&geo=1840696&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=15&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=hC2Xq9R0XwCcgIvmbTkG9mO9ZmiX9y04TJt583qVd7XaCDDOcisSKIrPwMdajD1wRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTMrHGcZGM2CHOMoCxSJmPpvkIeJVZHeLrt-GElt7-hXIFYjAGK7jf-oIOipFK1_PzD5__3NJR5QgH3RIcUrUtj8-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1be538870fed11be4e8d2b9fcb0b5a4fd&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=20c1b3d358ca4261a84ef10cbc8ff553&tp=MobileHotelSearch",
                    "auction_offer_key": "20c1b3d358ca4261a84ef10cbc8ff553"
                },
                {
                    "content_id": "114946076",
                    "provider_display_name": "Preferred Hotels",
                    "internal_provider_name": "PreferredHotels1",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Preferred-Hotels-&-Resorts-LOGO-LARGE_black_384_164.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=PreferredHotels1&src=114946076&geo=1840696&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=15&silo=27529&bucket=957378&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=pGa-bzfqxvcRJRbVR6fknRlyWIT-GsJDju_v9ZwkG4FjSAJiTnhCabR9w21gbugAZbKrR5Fkn2iRQFz6MGGPktddHNR4ap1MbbukWvDRINuMtVlxbiSiDlFloLrKxD9hiwcpGGxkQa7JPzR9M9iAns-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1e2ab9bb80db7f9d886d0bd4b5759e6d4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3ee8e0ff55f347c79765f703d561a08a&tp=MobileHotelSearch",
                    "auction_offer_key": "3ee8e0ff55f347c79765f703d561a08a"
                },
                {
                    "content_id": "207814890",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=207814890&geo=1840696&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=15&silo=41662&bucket=963192&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_DsmoeD8tqYw_bxZ-KrAQYL1X9GW9K-M6HKJsA2Rz8ZH3d5faQj9yrxCEoO3UHxaB6tsIZTuPGWPWoONmHWdIcoygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f7b63f1bd8122e787103021497cf1f2c&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5364d725e7c54256857a3a34f2548ef9&tp=MobileHotelSearch",
                    "auction_offer_key": "5364d725e7c54256857a3a34f2548ef9"
                },
                {
                    "content_id": "53961174",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53961174&geo=1840696&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=15&silo=11456&bucket=860112&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=VgOq6PrfM_FmyFyVDERScAFZEHnWa0boC8Ypz4vfgu96ENZx6_Tf1ZG3gOZzvI9WfJMRni2Dk8OerJncRq5nzX5W6PNHn5Drlcf0lw6WoNStsIZTuPGWPWoONmHWdIcoygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ac9799da365750d39e53fa6247adab85&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a09c90ad599b436cac0c2ab10b1eb68b&tp=MobileHotelSearch",
                    "auction_offer_key": "a09c90ad599b436cac0c2ab10b1eb68b"
                },
                {
                    "content_id": "79219227",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219227&geo=1840696&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=15&silo=13669&bucket=899272&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgL03YsWdmwMDZjQjNSQeaG_YjFj1KozGVwmbUclUCYW-PhuO6cn9N9_azkc0tJbOwI5J23gFaK9gKcizWOvS9SeZfwwHYU9GCelHR7sjXNIRKPFkhKrrW75u_IJ1O4zGJL8-SzO95gHe1_rePiEgiBj&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1dc1c1cddc1e2e35323d7229599a20800&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=79387a3d70be41cdb1ddc9e11f9a603c&tp=MobileHotelSearch",
                    "auction_offer_key": "79387a3d70be41cdb1ddc9e11f9a603c"
                },
                {
                    "content_id": "230973890",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=230973890&geo=1840696&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=15&silo=33308&bucket=966843&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=OiSET976UFS-GSgJ2QzNlidgTJK8HXfYRlfQuL7YLXyLFdNhj9q9mrlQsP4F6vmEzUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5f0kze5P_AZyktI4Rn4hazWIxY9SqMxlcJm1HJVAmFvhNuzh3y08o0qorIs9aH52DQTo7Mua-vQ8BVXHgxVu-hNsncb2tAlwgzVfnsx8WaaYK6UwEMdPHGRf8Dn9YrgDi37WPFHZiHp08uvzvqo8kkQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=104bf5da7edcb07526d97828d4f8f1803&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=59ad18165c5e4635ac3553156ecf061d&tp=MobileHotelSearch",
                    "auction_offer_key": "59ad18165c5e4635ac3553156ecf061d"
                },
                {
                    "content_id": "60413566",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60413566&geo=1840696&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=15&silo=35404&bucket=914257&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=ZTfC65apylFz5x2Dz0e-pOdggPSbiXgucycRdAId4XDeHyC8FiKtt7WKaPbCpvWd1X9GW9K-M6HKJsA2Rz8ZH12Kq3ytovqRkTPrIlzEYAatsIZTuPGWPWoONmHWdIcoygd6BfBaH5MSI8q7nWCp5aEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1947cdcf0f34e2260bc4636fda2bfc160&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=459eacf9495c420b84d8e235bb3a3efd&tp=MobileHotelSearch",
                    "auction_offer_key": "459eacf9495c420b84d8e235bb3a3efd"
                },
                {
                    "content_id": "129742366",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129742366&geo=1840696&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=15&silo=40511&bucket=944068&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOKgnWR7tPU1YrpcGaG8p1sg5r-athtxNuLbuS4T72uuGW2sJC_DEnmqcTiUj2mlaQgLEBLqeJ5NbMtgXeuMJmoSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14377b0843a0851f14b717a9d64af95cb&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=e069037a92854ab2acbc058c47c43343&tp=MobileHotelSearch",
                    "auction_offer_key": "e069037a92854ab2acbc058c47c43343"
                },
                {
                    "content_id": "78939426",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78939426&geo=1840696&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=15&silo=20728&bucket=862895&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=sYTKlc22jrgfwXIViIfMYa-UL95oetdYw4qpp-uXtUMjVnA24N5lO4Brc3rj6-hi1X9GW9K-M6HKJsA2Rz8ZH4ifRdc1rsnUCDp1TByR_AuEeamDh_XP6gmHac4Wf-eqZC_CyRJ1AbwFlLlVWbQFF5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a30f8ebf6c3d617b77b5902baa285ed5&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=224eac8ce2a7431b967ccb87489b07fe&tp=MobileHotelSearch",
                    "auction_offer_key": "224eac8ce2a7431b967ccb87489b07fe"
                },
                {
                    "content_id": "33208998",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=33208998&geo=1840696&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=15&silo=5122&bucket=895087&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4WCnBQRd13j9apujRpZro_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEv_ea2WkvwgInRn0FDWSqeuKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTk3dVhSlbwugZjATR5a4EuSuTKZYxgTwGMvCuOVoeux7nJvant3xjYUmSDDB_VW0g2QvwskSdQG8BZS5VVm0BReTw-YcvahhH5OhIUbrcSNUrS4WcvSKPb_Tg1pnpYyJX17jFmXd9YddN_oNMEYm0Z8&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1292f62b21cac6fda518757bf40a57a63&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=32a9a01704154c3fb55ed8653cb2b9aa&tp=MobileHotelSearch",
                    "auction_offer_key": "32a9a01704154c3fb55ed8653cb2b9aa"
                },
                {
                    "content_id": "42904600",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42904600&geo=1840696&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=15&silo=17377&bucket=927871&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCS34rko2JFizKqqKHbGDV6U2mX1HYO_rIcJn6n79MaCGKW3jJjcHrA1p2rqCWqPZZoqSM6RZISl0jE1LhiNgL2YvXGxdsvTj78S1bUIW7KURmXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=115050eaf02a2d343066d94378ff4e297&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=34309f51d37a427db1bb0d8a39928e62&tp=MobileHotelSearch",
                    "auction_offer_key": "34309f51d37a427db1bb0d8a39928e62"
                },
                {
                    "content_id": "119833130",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119833130&geo=1840696&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=15&silo=29510&bucket=884014&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z2GbjHbZBZgLkNPMNy_AJWNRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiRZuflJKHoqr7vqz08C-UDyL1xsXbL04-_EtW1CFuylEZlwgOF0mb35dY5Kb9799J6TGaZ5faK7BGMkEkTRxtWn&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c5135c5b34f670755655f5c5b2492b60&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bf1e4a392161476fba7ffa70c24076c9&tp=MobileHotelSearch",
                    "auction_offer_key": "bf1e4a392161476fba7ffa70c24076c9"
                },
                {
                    "content_id": "246437003",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246437003&geo=1840696&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=15&silo=47774&bucket=998819&nrank=14&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2iVoo0UKSNX-_dmSa9UUaZiIxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJuy_apLy54sDiMD4vxlEOlNQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2931ab67-c243-4119-9585-51e4bed9596c&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12cf922407f767445e0a6f787dc14a15b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d235facdae7545e6bc79b11ab240edb0&tp=MobileHotelSearch",
                    "auction_offer_key": "d235facdae7545e6bc79b11ab240edb0"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "8650511f-6e65-4f85-a44e-bc86eb3da974"
    },
    {
        "location_id": "2525702",
        "name": "Radisson Blu Hotel Chennai City Centre",
        "latitude": "13.066944",
        "longitude": "80.255554",
        "num_reviews": "1943",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/cf/7e/6b/hotel-exterior.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/cf/7e/6b/hotel-exterior.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "682",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1c/cf/7e/6b/hotel-exterior.jpg",
                    "height": "1023"
                },
                "large": {
                    "width": "300",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/cf/7e/6b/hotel-exterior.jpg",
                    "height": "450"
                },
                "medium": {
                    "width": "137",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/cf/7e/6b/hotel-exterior.jpg",
                    "height": "205"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-04-02T05:00:13-0400",
            "caption": "Hotel Exterior",
            "id": "483360363",
            "helpful_votes": "1",
            "published_date": "2021-04-02T05:00:13-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.766937255859375",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "14",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#14 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "2.4869166074302766",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$81 - $135",
        "neighborhood_info": [
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "42069678",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=42069678&geo=2525702&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=14&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2iesy00d5lRAR0WZY5uDSxhDFBhBGFMoTiNwTQdS8MF3K1g9oArlUaT_-we2nUQ4Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2Xzp-9ZMwA5IyFMSgRs8yTXsP09EJsUEFxITcuIAnRt2dZGSbjkolhIZZQb_Ff-szM-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=145158b8a3025f3db93eaa80e56f21a52&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2bab174dd3474c1d993abbc4657a7cbb&tp=MobileHotelSearch",
                    "auction_offer_key": "2bab174dd3474c1d993abbc4657a7cbb"
                },
                {
                    "content_id": "40563873",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=40563873&geo=2525702&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=14&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=C6rCSUom6gEpEwpGAk2bT3qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4lhyaHcwRdb2s7dX_0LskpliUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrZRPz29Pr2PBVly95dyfUVEVbnplo1-rIJnfpDwdMD62hKIB7AGzAIvbvf1T7u1L3_n1gOiSXtsy3z7WHWuhC0clDSgEAeLy00ITLY0qP0uO7Om8xXkTTHP_ZuVaLQiWBYWSZBbGuElZrQK6spv_yIw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18cc0f55a91f4657385c2c790f9ea1faf&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bb4b9738cc35459eb50674397558104a&tp=MobileHotelSearch",
                    "auction_offer_key": "bb4b9738cc35459eb50674397558104a"
                },
                {
                    "content_id": "40564693",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=40564693&geo=2525702&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=14&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=BYh9Ahk2hP8ZRwfbNSMyYGO9ZmiX9y04TJt583qVd7Vy3BnIwsx3h105G10IyDVgRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTKrzex0rww-KxCQlmEt77VwCwhTGrPNnEY5dUBc4THFWGrUtOVVXBRGOCxeXXtrFLtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1400c3ff1e723666108e252be43464ec4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6f46a5498ea74724a650be630cfba02b&tp=MobileHotelSearch",
                    "auction_offer_key": "6f46a5498ea74724a650be630cfba02b"
                },
                {
                    "content_id": "174635756",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174635756&geo=2525702&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=14&silo=33308&bucket=966843&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=EuJt7PSf-n42azhEPQlDgnlYYWhR9OLBi4sp5vRvjXx_NA44-eoRh2ZzfW0C7dMHFnm7b70toowV761ZAZECIhmsjMqdSeb7UVNBt8HJUamlbr8UupZo4EgXhcQVjNWQQp2xnMSOchVPNDfk62O7AXyTEZ4tg5PDnqyZ3EauZ81SelhWjToEYMQg83krHZJbmT48400CjuKxackAFjm5YFBxdK21TSPG0d5O-fFmxI8PSjAxONImIfjmFeq8f3o7HQVQybncDKAuQBTopMBNpQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17c68d261cbe39928e39a84e3fc4e3ede&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=985a2a8fec154d59b11e353981fb9203&tp=MobileHotelSearch",
                    "auction_offer_key": "985a2a8fec154d59b11e353981fb9203"
                },
                {
                    "content_id": "53964345",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53964345&geo=2525702&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=14&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=qTR9KbHUL6a_Z83j2MBjR_glwkHErrRMuGt2aIqtQSb2B6dKngYWGd6LOfiVLjeVfJMRni2Dk8OerJncRq5nzfZfAs-GTRGrA7GKtdoZEFSd85eESGudB8FT3KI5mJWEyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1759f6c66e6160f549a604a88c5bd82da&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f581bf53546043c7a5c5f9cd4f76b62e&tp=MobileHotelSearch",
                    "auction_offer_key": "f581bf53546043c7a5c5f9cd4f76b62e"
                },
                {
                    "content_id": "110014771",
                    "provider_display_name": "travelup.com",
                    "internal_provider_name": "TravelUp",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelup_384164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelUp&src=110014771&geo=2525702&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=14&silo=25520&bucket=892234&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=LxQr0xEjuGw_0RlS9pb8TIWTrSM_E8njLb7H6qtztPjyDTJJy63Z87LFxfogcxNriMShykcf-t_lImP_P3J01qXCmafMtkJlVWYPlw-6VDVC687qfrPSXDeHHM-9tH6lve-poZi_MEY2njXCD28ehiT6gtfn1FUJ0hlpwr89lOH7AyRdSDRWOpi7KTTrJAobIv6qVHZVUi6w_KP5Lzu8Cw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11a22f09d960fc7621ad2049bfde8d5b0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=52f35b0a901541bdbed18bcbaea8f5ce&tp=MobileHotelSearch",
                    "auction_offer_key": "52f35b0a901541bdbed18bcbaea8f5ce"
                },
                {
                    "content_id": "78954106",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78954106&geo=2525702&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=14&silo=20728&bucket=862895&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=CwDJfr5P74i2FxPm2HFh0Gm_Ad2WVMUCYFul6YcrnSy1c4HT1K_PETBFEKDHWi2x1X9GW9K-M6HKJsA2Rz8ZHwdJOUuEigWE7TKkTVSbwa_yiYcKo7KvKsphT0YFA6NCwIYrpoOlnNxESAN67rOADHBuILdqQovyk5-HitwUBNqPDCdPHhb47mkWHMV-F9my2DZAAxgr5PzgwLgfcfRfcw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b6015b1d8b49f47151a906dabcbdb751&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=0065ec23e9f646c6a168104a5d042b1c&tp=MobileHotelSearch",
                    "auction_offer_key": "0065ec23e9f646c6a168104a5d042b1c"
                },
                {
                    "content_id": "115617178",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115617178&geo=2525702&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=14&silo=13669&bucket=899272&nrank=9&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgLjl9yrtTMFc31iVnSHIdW8YjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3wzQT2q1T8J7h7yAU838ZcveZfwwHYU9GCelHR7sjXNIRKPFkhKrrW75u_IJ1O4zGJL8-SzO95gHe1_rePiEgiBj&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=143149b2aa767ba72e1fbfb5476a27337&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8d8a57afe79e41fbabf47d626563a2e6&tp=MobileHotelSearch",
                    "auction_offer_key": "8d8a57afe79e41fbabf47d626563a2e6"
                },
                {
                    "content_id": "129731996",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129731996&geo=2525702&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=14&silo=40511&bucket=944068&nrank=10&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOj2bj3mwvm6Y9GcXEeeqHGGLELoSCXDwGm4zVnF5w_w4Myk_dibbQLpd9IdOudj7PtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1283994bb5025a2c524a3b433e97afc3a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d1fee7d7a25f4036bbf318a629f03da3&tp=MobileHotelSearch",
                    "auction_offer_key": "d1fee7d7a25f4036bbf318a629f03da3"
                },
                {
                    "content_id": "60575405",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60575405&geo=2525702&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=14&silo=35404&bucket=914257&nrank=8&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YA_oOQ7sfEM6x58KrDMKeppUya437F6-AlRniSxmvVmlbRuLOOd_KQ5tExwNOpYn1X9GW9K-M6HKJsA2Rz8ZHwygAaSzr1NYgRSwLniy6I2d85eESGudB8FT3KI5mJWEyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18cf0aed5d6c6ccc57df1393d2433d031&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8e2f2423d5884b5ebda6c1838b2c790a&tp=MobileHotelSearch",
                    "auction_offer_key": "8e2f2423d5884b5ebda6c1838b2c790a"
                },
                {
                    "content_id": "41242954",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=41242954&geo=2525702&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=14&silo=5122&bucket=895087&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=nJlJl5L_JuwOZk-AboImx_IrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN47LolQcWNKHai7WWQOLGH3avbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvvxUStYlD-sLwWwDV0rvUAiGVb5RJlmG-Z_AiPivRzxEYPwVzW3RSaNPdGF2NLDW73vqaGYvzBGNp41wg9vHoYk-oLX59RVCdIZacK_PZTh-wMkXUg0VjqYuyk06yQKGyL-qlR2VVIusPyj-S87vAs&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15c0d0a8389f49468320aea34a7e0def1&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=35f98ea8b0e14de39dae01fada671b18&tp=MobileHotelSearch",
                    "auction_offer_key": "35f98ea8b0e14de39dae01fada671b18"
                },
                {
                    "content_id": "150285357",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=150285357&geo=2525702&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=14&silo=29510&bucket=884014&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z11xmrMD81QPcGfmjXlO7giRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiQTWukNNKNou7JWu70hqVbGUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1f780ad3bfdced3a4c5e2ea9d0c3f4575&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=e68585e6b963453a83572861b852dd0e&tp=MobileHotelSearch",
                    "auction_offer_key": "e68585e6b963453a83572861b852dd0e"
                },
                {
                    "content_id": "246438907",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246438907&geo=2525702&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=14&silo=47774&bucket=998819&nrank=12&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2nAGtnPPDYm9gtgCzlSds92IxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJtBParVPwnuHvIBTzfxly95l_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1108434d02cfe6b07bda0447ffcf2955f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=aee548284b5a47349c6a7a740db5acff&tp=MobileHotelSearch",
                    "auction_offer_key": "aee548284b5a47349c6a7a740db5acff"
                },
                {
                    "content_id": "42912201",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42912201&geo=2525702&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=14&silo=17377&bucket=844412&nrank=12&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=zUAzBHz1A_Ahcz1J7Pgs1jCFk-6mbRWzuALu6h1CAVVsbOJS_V0ZHENGCRZX-EgiRVuemWjX6sgmd-kPB0wPrYsv83oHu9x2gmMwO88Jd6QTWukNNKNou7JWu70hqVbGUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=18da68ee-4578-4afc-8e42-30c5a65e3f2d&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=195f52166698f91f9f9353aac6c66d87f&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c263463f605f4b17b9b74d74c049f893&tp=MobileHotelSearch",
                    "auction_offer_key": "c263463f605f4b17b9b74d74c049f893"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "e5e1e368-362f-40bb-ba8c-226ac478e241"
    },
    {
        "location_id": "304556",
        "ad_position": "inline2",
        "ad_size": "8X8",
        "doubleclick_zone": "as.india.tamil_nadu.chennai",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Chennai District",
                "abbrv": null,
                "location_id": "10745344"
            },
            {
                "subcategory": [
                    {
                        "key": "region",
                        "name": "Region"
                    }
                ],
                "name": "Tamil Nadu",
                "abbrv": null,
                "location_id": "297674"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "India",
                "abbrv": null,
                "location_id": "293860"
            }
        ],
        "detail": "0",
        "page_type": "hotels",
        "mob_ptype": "app_hotels"
    },
    {
        "location_id": "589477",
        "name": "The Raintree Hotel, St.Mary's",
        "latitude": "13.028605",
        "longitude": "80.25273",
        "num_reviews": "1989",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/86/d4/d7/the-raintree-hotel-stmary.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/86/d4/d7/the-raintree-hotel-stmary.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "815",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/23/86/d4/d7/the-raintree-hotel-stmary.jpg",
                    "height": "768"
                },
                "large": {
                    "width": "478",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/86/d4/d7/the-raintree-hotel-stmary.jpg",
                    "height": "450"
                },
                "medium": {
                    "width": "218",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/86/d4/d7/the-raintree-hotel-stmary.jpg",
                    "height": "205"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2022-05-25T02:34:17-0400",
            "caption": "Hotel Facade",
            "id": "596038871",
            "helpful_votes": "0",
            "published_date": "2022-05-25T02:34:17-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.84066104888916",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "15",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#15 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.614857351661221",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$85 - $103",
        "neighborhood_info": [
            {
                "location_id": "13087573",
                "name": "Alwarpet"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "32464508",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=32464508&geo=589477&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=13&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=ZM1825rb8kEYB5DONjzLgRhDFBhBGFMoTiNwTQdS8MGKvOYo4LQ3b5V0ytxH_eV-Att6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96hH8qG8RXn8-Vt3DaGL8F_ZBYEu4L-TWLuu22f-Jv9cD9ZJx3pnVd5OrB82up2aQQyg_oq2LCjoNXdrZPkkNNkSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15403987bde4c19e95591c8e4557fbab7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=50b1e66d944d481ea62505dcc2234d8a&tp=MobileHotelSearch",
                    "auction_offer_key": "50b1e66d944d481ea62505dcc2234d8a"
                },
                {
                    "content_id": "34546683",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34546683&geo=589477&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=13&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=gfWmoD2Dsp5izlOEV4j4QHqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4n1LwRKc_F3y3G6iWueACgFiUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrZRPz29Pr2PBVly95dyfUVEVbnplo1-rIJnfpDwdMD63tpGg-eUYGa0GAvN0IXMOV_n1gOiSXtsy3z7WHWuhC0Yqw-a2_aif-yUshIud_7si7Om8xXkTTHP_ZuVaLQiWBYWSZBbGuElZrQK6spv_yIw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14cceafa2447a22de85b8db51da69b2df&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9da997d927c846198e7f856e60480ae2&tp=MobileHotelSearch",
                    "auction_offer_key": "9da997d927c846198e7f856e60480ae2"
                },
                {
                    "content_id": "32634602",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32634602&geo=589477&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=13&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=jAqip0kZFSKXZTqvJIz-EWO9ZmiX9y04TJt583qVd7WmKvxRVKtykoZXbLw_dxsyRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TT4m4WgcFSpwurLmhw5CKumVcYE4PIxZOSms200zVlO5uKDB_pNtZm6LTm1Q8jvDexMJlzb3Ek8xXVYz7-uNtrY1pdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17671ddb2dca9fdd86e14ba7f77e4c542&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2603df59bc2347ad8c535bbafd44ec09&tp=MobileHotelSearch",
                    "auction_offer_key": "2603df59bc2347ad8c535bbafd44ec09"
                },
                {
                    "content_id": "42907787",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42907787&geo=589477&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=13&silo=17377&bucket=895478&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=LmJXey3yOUWMF1VUJmzqOkawtslz1QA9xi_8POLEQ70VuehBrVNbLTd9THjomSb_XHn-4Z31R-lFh2kASsoz3t0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLqVkoPWrrvDC9d3pDzQlhl9FW56ZaNfqyCZ36Q8HTA-t1EDF5ODFskMqUsO440qYy-10e-46VzVqi7e5LJvuBvnFO2C-bx92m4Bx-HPNvt27rm4JRhwRKlFkQRGibvdC3p6nYGVyIJd3GAaUpV7f-4A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12564e42dd060b3e6b1549630bb5ed304&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=42bf00be02e74992b56fc7e704a52dd1&tp=MobileHotelSearch",
                    "auction_offer_key": "42bf00be02e74992b56fc7e704a52dd1"
                },
                {
                    "content_id": "53941228",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53941228&geo=589477&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=13&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YON-wOVNi3rJ-DfoAUBNJPRowFwYkrF7L8fh-YX3zo2LnTJGYdDWcSaAgSBxkdn4fJMRni2Dk8OerJncRq5nzX5W6PNHn5Drlcf0lw6WoNQ0N6eWQR8vHXl9op-bAVq1vFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ae4fa2d0ae59047938a9a404fdc28a2c&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=67f860c01efa49b3abf5f3de8771ceba&tp=MobileHotelSearch",
                    "auction_offer_key": "67f860c01efa49b3abf5f3de8771ceba"
                },
                {
                    "content_id": "79219221",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219221&geo=589477&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=13&silo=13669&bucket=899272&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgLjl9yrtTMFc31iVnSHIdW8YjFj1KozGVwmbUclUCYW-ChAMFV-OoouQdUyM8LFF3-3KkASkwjjLO8GuZBxz80VUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1245edc127f12403a95eda42c64f86e02&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2c51a3f21b3e47d5a7af8a33aa6620e3&tp=MobileHotelSearch",
                    "auction_offer_key": "2c51a3f21b3e47d5a7af8a33aa6620e3"
                },
                {
                    "content_id": "78898009",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78898009&geo=589477&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=13&silo=20728&bucket=862895&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=_TKPeleZNq-QKXc_YfehQkLV8TBmSZDf3m9WFUG6jvRpUQkrZ4r73wxnYbVswBQc1X9GW9K-M6HKJsA2Rz8ZHwTU7K9b_RCyCqItjN-ktXDs5IcnArC60nExEx3weT-zbwHk6AyRdFpms6pScXfYQ5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1227bc17c46f337e302dbee42e1038431&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=540e51eb0b4342a98b8daf7783348976&tp=MobileHotelSearch",
                    "auction_offer_key": "540e51eb0b4342a98b8daf7783348976"
                },
                {
                    "content_id": "60413933",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60413933&geo=589477&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=13&silo=35404&bucket=914257&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=2CGWkaYoTrwHJLAOvxpGcAuWsLSLD46g84nOPXSwujk19dY8cFWPF9mEt5FIw-bU1X9GW9K-M6HKJsA2Rz8ZHzVxookgg0f_9OOgDrsjogs0N6eWQR8vHXl9op-bAVq1vFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=10645b6fc9a2b86b9b9604a221c099510&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=27ac5c7d715245d6b59f13472f4093fe&tp=MobileHotelSearch",
                    "auction_offer_key": "27ac5c7d715245d6b59f13472f4093fe"
                },
                {
                    "content_id": "33211126",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=33211126&geo=589477&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=13&silo=5122&bucket=895087&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4WCnBQRd13j9apujRpZro_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEv_ea2WkvwgInRn0FDWSqeuKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvvxUStYlD-sLwWwDV0rvUCuTKZYxgTwGMvCuOVoeux7ZaPNnOMKfZxMhwL-ff0HCm8B5OgMkXRaZrOqUnF32EOTw-YcvahhH5OhIUbrcSNUrS4WcvSKPb_Tg1pnpYyJX17jFmXd9YddN_oNMEYm0Z8&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17f93be4b6db4bc02208b60d94e7fddac&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=fa189b72ccb24d5688466d4d77dbf038&tp=MobileHotelSearch",
                    "auction_offer_key": "fa189b72ccb24d5688466d4d77dbf038"
                },
                {
                    "content_id": "174636023",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174636023&geo=589477&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=13&silo=33308&bucket=894612&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=WNEkz3pHAO50ImDwTg5zGWVclNY9LuHe68owdeF7R9r2KwWUNLjQSB3zM_wYTmXv9r4qTI3WFXzTjn2q_RRA9BA9K7MmsroimglZYqrzLSx35B02EStXjmHgjnqCtNxvfGov6ztKywB8v6YVlHaK7mIxY9SqMxlcJm1HJVAmFvjt3fAOHkqUd1neKgXoS4w6Wkjr0auM88cuo8hv71lECALWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c56f05eb087b8e50f30ef7d81a20a4ff&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=c732d7b6ed2b445483d42fe3ec536cab&tp=MobileHotelSearch",
                    "auction_offer_key": "c732d7b6ed2b445483d42fe3ec536cab"
                },
                {
                    "content_id": "131684880",
                    "provider_display_name": "Prestigia.com",
                    "internal_provider_name": "Prestigia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-prestigia-size-384-164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Prestigia&src=131684880&geo=589477&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=13&silo=5512&bucket=902885&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=WdhpVAF5cj9CAGGfp_oI4x5W2eTBloM3z1afNi3kVgNQXvWwzg-IDMJDhrE0tUAKnINEdRpRYZUUAVIk9pd5g0Vbnplo1-rIJnfpDwdMD61efF73e_420GlFSAY9Ny6-typAEpMI4yzvBrmQcc_NFVBxdK21TSPG0d5O-fFmxI8PSjAxONImIfjmFeq8f3o7HQVQybncDKAuQBTopMBNpQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fb8c878dceb6dc3fcfed36e3aba0ac7e&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2742cad8598e4f55aeef46d4f45c7e67&tp=MobileHotelSearch",
                    "auction_offer_key": "2742cad8598e4f55aeef46d4f45c7e67"
                },
                {
                    "content_id": "129731573",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129731573&geo=589477&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=13&silo=40511&bucket=944068&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=nCRV0ElruwpCQfXLYezmLc9yNuH8CM9x1bNIpTv86FcQhGMyvlgj3pZQN3-AkOqOegVsvSMa5tv-ClwItlt2aGIM4QA-94ghGZEVtLx2-CSwmtcupBDOewIH4rkchoNPhBD8L5igZwMWSTS-shbnpJ_pzsXilbDlWEft9jFqCpSm89_scKqOHZVHrJfh-jAG3hVVHrp38Tk90o-UafJyoCT6gtfn1FUJ0hlpwr89lOH7AyRdSDRWOpi7KTTrJAobIv6qVHZVUi6w_KP5Lzu8Cw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16822bf95c6f19bec096697ade6bc67f7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=a54dfbd2e1cf4964be848a58684eb365&tp=MobileHotelSearch",
                    "auction_offer_key": "a54dfbd2e1cf4964be848a58684eb365"
                },
                {
                    "content_id": "246438412",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246438412&geo=589477&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=13&silo=47774&bucket=998819&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2nAGtnPPDYm9gtgCzlSds92IxKHKRx_63-UiY_8_cnTWJuhFFP6ZEiCSXn6rMr_dJrcqQBKTCOMs7wa5kHHPzRVQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=2eca9954-2905-4359-a7db-c1598d34bb84&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a920964605079e16ed20a613588ab0d7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=369674748d9844f0b357ce68e76ec4ae&tp=MobileHotelSearch",
                    "auction_offer_key": "369674748d9844f0b357ce68e76ec4ae"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": [
                {
                    "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=589477&from=api&area=&slot=2&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270244121&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkSvxXWkgIZt4tQZ6C9U4OGRtwKXPOcpKSU0MKZAIAzLGL5PWr2XzSGwGr5Vo1yO51g&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&def_d=false&bapid=2&cs=1527318bc4cc9624c45f16c7a7ccbcc97",
                    "label": "Hotel website",
                    "type": "url"
                }
            ]
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "d53fbe59-adf2-4e78-89c8-3092e39f6825"
    },
    {
        "location_id": "1237859",
        "name": "Somerset Greenways Chennai",
        "latitude": "13.017248",
        "longitude": "80.27061",
        "num_reviews": "916",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/34/a4/3c/facade.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/34/a4/3c/facade.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "5616",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/34/a4/3c/facade.jpg",
                    "height": "3744"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/34/a4/3c/facade.jpg",
                    "height": "367"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/34/a4/3c/facade.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2023-05-19T22:46:32-0400",
            "caption": "Facade",
            "id": "691315772",
            "helpful_votes": "0",
            "published_date": "2023-05-19T22:46:32-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.810513496398926",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "16",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#16 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.921106915876814",
        "distance_string": null,
        "bearing": "south",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$",
        "price": "$80 - $172",
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "36447803",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=36447803&geo=1237859&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=15&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=Dz9cZu7HKW8hPn6hr7ZOoBhDFBhBGFMoTiNwTQdS8MFSWqbIdpVODhNErPPhLkayAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2Q-oj3UHONGKPynJUiaaIFDsP09EJsUEFxITcuIAnRt2fcjTYzf-pkQXUeRYih_VXc-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1179cd47a390ec931ba548c20574a44bc&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f740ca83d06d497192b646386bb0435a&tp=MobileHotelSearch",
                    "auction_offer_key": "f740ca83d06d497192b646386bb0435a"
                },
                {
                    "content_id": "36856045",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=36856045&geo=1237859&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=15&silo=6103&bucket=901739&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=wh_gzwNfza30QSGeIy96xXqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4-pY6dsvMWpQf4FZGJcaXYViUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrx5mtu8fua4RtTIK5agivTkVbnplo1-rIJnfpDwdMD620Yc8FXfqHbUz2dY3dbWQ-RXHd6pnp7Vuw2vFMAznGxLxb8FydJ75Cdj8579yK-5ChHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1122e8b099b4f4d6110e76de7708b2796&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=bcf3963ffa8845fa86d07914af950948&tp=MobileHotelSearch",
                    "auction_offer_key": "bcf3963ffa8845fa86d07914af950948"
                },
                {
                    "content_id": "36477385",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=36477385&geo=1237859&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=15&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=w8iMwlhjdiSdPtWnIWNDV2O9ZmiX9y04TJt583qVd7UB1sF8hyFIBlcuxe1qrZRFRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTSNmrWyA8uvvmTIFLJ1nljliGjBlYfXq2f0AC_S0VCHqS3w0JWYWP3BJEhiMD6VphMJlzb3Ek8xXVYz7-uNtrY1pdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=19163a73616235b8159f12b520fbf4406&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d206083a486e4516ac03eaa26eba6595&tp=MobileHotelSearch",
                    "auction_offer_key": "d206083a486e4516ac03eaa26eba6595"
                },
                {
                    "content_id": "42907956",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42907956&geo=1237859&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=15&silo=17377&bucket=895478&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=NBowHJuiVJ02KqSD9RyhREawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvJA_JVUBnG0kfuqfNyWSSNt0COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLk5sgSSaYWBc3OvIg-WLkHg2mX1HYO_rIcJn6n79MaCGe3nikm_ZyoAfAZ7fhlauZVgi3Atqy7_IDbNii1n1ucyasLZdfZlAARHXcvr8pVd3mXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=17f99f1d5aa63d13af13546a5f1a924d4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=dd32d6f78e2347d0968f6140d91a97f2&tp=MobileHotelSearch",
                    "auction_offer_key": "dd32d6f78e2347d0968f6140d91a97f2"
                },
                {
                    "content_id": "53955307",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53955307&geo=1237859&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=15&silo=11456&bucket=860112&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=nhRh6hLR0xE9_cHNSPrOp0NRO6OOSc1s4DlXpdc4l51x3THyMmsoLKfLqWdNhw1MfJMRni2Dk8OerJncRq5nzdwAcIulSkuL6uj9feYa5qWDirKZQQEB1I2uLaRm0FJ0vFvwXJ0nvkJ2Pznv3Ir7kKEd1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12d665e5a62e2980fbf931569a4c41f99&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=058cec013d1346c68eca487053f95136&tp=MobileHotelSearch",
                    "auction_offer_key": "058cec013d1346c68eca487053f95136"
                },
                {
                    "content_id": "174637209",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174637209&geo=1237859&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=15&silo=33308&bucket=966843&nrank=7&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=979zonfOmWnNUe2xwnErsSdgTJK8HXfYRlfQuL7YLXz3xd136zSy6ZkTjJE_3qumzUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5hz9aBGgkN26UYQ7tDDg7ATso74eQD8sxgaKbVu4TkPFiWsgveQ-klTFoEyoFUjMNy158wGbwTBlKK9rKrh36rtsncb2tAlwgzVfnsx8WaaYK6UwEMdPHGRf8Dn9YrgDi37WPFHZiHp08uvzvqo8kkQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ee10f6f7f3e9ae90446c7bc140d4f03a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=f37d5fd8a24e40f9a08bb64d728c7f55&tp=MobileHotelSearch",
                    "auction_offer_key": "f37d5fd8a24e40f9a08bb64d728c7f55"
                },
                {
                    "content_id": "209125641",
                    "provider_display_name": "Algotels",
                    "internal_provider_name": "Splitty",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/algotels.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Splitty&src=209125641&geo=1237859&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=15&silo=41662&bucket=963192&nrank=6&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=gj3Vz2GMgw3D3zTkhy80kenQhVfmbtlo54Ai5oYz9_BkaxzzksgPXT6NANAyB6htiMShykcf-t_lImP_P3J01oVn60FH0hgljqmXhF2m6A9QLfibD-jzTpz1vGf4n3r5irD5rb9qJ_7JSyEi53_uyLs6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1630f01b5702239a51a153d8018a0a3b0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=603b55da7b1842d197dbae610a567cef&tp=MobileHotelSearch",
                    "auction_offer_key": "603b55da7b1842d197dbae610a567cef"
                },
                {
                    "content_id": "78919305",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78919305&geo=1237859&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=15&silo=20728&bucket=862895&nrank=9&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=d6qD_9VEiNQKSPutiV2zc1-nYZYwKABpPcPJd1ld1-7vBHNtRuc-JrM1l027EQ7c1X9GW9K-M6HKJsA2Rz8ZH94cIgJLJIluOzU5hv6n37LBKJkpO7hjtbv1CWVO38mzbwHk6AyRdFpms6pScXfYQ5PD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c1d875ea55e6d57cf9159d834c59dbbe&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=acf0a5afa0b84da8ada66bb81c2aea10&tp=MobileHotelSearch",
                    "auction_offer_key": "acf0a5afa0b84da8ada66bb81c2aea10"
                },
                {
                    "content_id": "60456283",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60456283&geo=1237859&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=15&silo=35404&bucket=914257&nrank=8&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YA_oOQ7sfEM6x58KrDMKeppUya437F6-AlRniSxmvVl1AhNaHrwkojaLnDg7KsOEiMShykcf-t_lImP_P3J01gKMvixNkJqmq7E3k2ZPYWlQLfibD-jzTpz1vGf4n3r5irD5rb9qJ_7JSyEi53_uyLs6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1acd28cb0ac238f1334c7defadcdaed82&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9f6df0c73c4e4c77a8808057f8fa7e5c&tp=MobileHotelSearch",
                    "auction_offer_key": "9f6df0c73c4e4c77a8808057f8fa7e5c"
                },
                {
                    "content_id": "79219215",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=79219215&geo=1237859&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=15&silo=13669&bucket=899272&nrank=9&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgKKsq6X72f96FsPGyryhQwAYjFj1KozGVwmbUclUCYW-POAGS12Fg3bD5ywWC388yAGJWefSkssgQqG6z01BlwbUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1837123bbc5f6b19ad256c4c390bd3729&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d9102d80c57741eca8c0b813a423a9e7&tp=MobileHotelSearch",
                    "auction_offer_key": "d9102d80c57741eca8c0b813a423a9e7"
                },
                {
                    "content_id": "242677730",
                    "provider_display_name": "Official Site",
                    "internal_provider_name": "WIHP",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ASR_TA_384x164.png",
                    "treatment": "supplier_direct",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=WIHP&src=242677730&geo=1237859&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=15&silo=14796&bucket=981658&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=ZdxYGKvfqDNJ6nM6CUTgZ2Kr4YlYSNOyJktnaEatrCrfopaVSX64lMaMpgXhMFQi1X9GW9K-M6HKJsA2Rz8ZH_OqXMn-PFyjm9-1y3zM--R9EHwqC_4UKiHse5grCMbAQL94dxjTdGh3tb1m1pP8bFpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b259b6ebe272a90ffb85704593e48af4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9d29be863c6b46abbb0a828da86d3086&tp=MobileHotelSearch",
                    "auction_offer_key": "9d29be863c6b46abbb0a828da86d3086"
                },
                {
                    "content_id": "37019887",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=37019887&geo=1237859&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=15&silo=5122&bucket=895087&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=4WCnBQRd13j9apujRpZro_IrRKAuBU374X62P8Vlh1m4ChFnz6CrnhWvPR0GBuEv_ea2WkvwgInRn0FDWSqeuKvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTrzUWev8OeWJlkD_XH9CBVSLA1xwPWX1ETQp4XRBy51QcHIbDhsk7maVgZvNAj7XfzCZc29xJPMV1WM-_rjba2NaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16332c300429994c9e71ae6397ccb57d0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3e9066d04f534982ac6eb64a7a7be0cc&tp=MobileHotelSearch",
                    "auction_offer_key": "3e9066d04f534982ac6eb64a7a7be0cc"
                },
                {
                    "content_id": "246435162",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246435162&geo=1237859&from=HotelDateSearch_api&slot=13&matchID=1&oos=0&cnt=15&silo=47774&bucket=998819&nrank=14&crank=14&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=2V32bU9LHsoMEtyJF2bJj_zRLuIeU_TYOOSAlt1hmgURXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfNkknYWOri9ldJpvskMPR5qbSRCwO7GBSKUEOselhC5yFl_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1575135d2574bd144736cfcef3e8724be&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=376ff447b8634d739d7defbed2c46f1a&tp=MobileHotelSearch",
                    "auction_offer_key": "376ff447b8634d739d7defbed2c46f1a"
                },
                {
                    "content_id": "39546649",
                    "provider_display_name": "Destinia.com",
                    "internal_provider_name": "Destinia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Logo_Destinia_AT.GIF.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Destinia&src=39546649&geo=1237859&from=HotelDateSearch_api&slot=14&matchID=1&oos=0&cnt=15&silo=17847&bucket=941214&nrank=15&crank=15&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=l3Xu4lHHteiSLMXIZ5Lb47pucqEfwsSFAD1D5_DznvfEgPgH6npWd9EX56VWark8r2gALzln_9kt54KfEzk0eQFNUEAsyKa7lKw3vpVa7DIIttd-ArAoj8Ad0gRfCMrdtjdwU1POW7jEiAyJWvsyPZWpRAlrWReqjvL_UBY67Op9yNNjN_6mRBdR5FiKH9Vdz4p8w5Kh-qqeY6g_lJnurdw8uOTEbiYh1Mce_cPoluCgYS0EmbVMSXHl7ErJpXPU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=148b47df25c2396a22b9fb293263072c5&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=40dbf1a6ebb74568a01a29ff5bbf7a1a&tp=MobileHotelSearch",
                    "auction_offer_key": "40dbf1a6ebb74568a01a29ff5bbf7a1a"
                },
                {
                    "content_id": "105740899",
                    "provider_display_name": "ZenHotels.com",
                    "internal_provider_name": "ZenHotels",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/zenlogo.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "unavailable",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=ZenHotels&src=105740899&geo=1237859&from=HotelDateSearch_api&slot=15&matchID=1&oos=0&cnt=15&silo=24521&bucket=901414&nrank=13&crank=13&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=Lw_YmO3oNE9OPYFWE2JKyzNA2hV2owobK-HKwW45IId_dgoCAZ7M7x2T6sOrzcQ51X9GW9K-M6HKJsA2Rz8ZH8QU-V10dlSFdwsLAvD0C-jCdhVHLQxIISvNaQLuXB-T3hVVHrp38Tk90o-UafJyoCT6gtfn1FUJ0hlpwr89lOH7AyRdSDRWOpi7KTTrJAobIv6qVHZVUi6w_KP5Lzu8Cw&pm=BR&hac=NOT_AVAILABLE&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=3c19182d-e178-4ce3-8606-1222de632548&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=148bdd9330563f313d9311acbf6bb9299&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=8dd1198a2d5740659ddb394bdce63086&tp=MobileHotelSearch",
                    "auction_offer_key": "8dd1198a2d5740659ddb394bdce63086"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "5.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "643821c0-5c67-45c2-99cb-d18115742b7d"
    },
    {
        "location_id": "25272770",
        "name": "Rathna Residency",
        "latitude": "13.049601",
        "longitude": "80.24908",
        "num_reviews": "114",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/28/32/3b/5a/floor-view.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/28/32/3b/5a/floor-view.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/32/3b/5a/floor-view.jpg",
                    "height": "853"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/28/32/3b/5a/floor-view.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/28/32/3b/5a/floor-view.jpg",
                    "height": "367"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-02-15T00:01:41-0500",
            "caption": "Floor View",
            "id": "674380634",
            "helpful_votes": "0",
            "published_date": "2023-02-15T00:01:41-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.874998092651367",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "17",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#17 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.592880817139491",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$61 - $76",
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "236950990",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=236950990&geo=25272770&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=4&silo=10500&bucket=903023&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=kBfp2CBjg9uFbfysYlufxBhDFBhBGFMoTiNwTQdS8MF1Iji_V3zPex8lpEzZnDBdAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2Ydpy-X31CpKm7CTH2SEeBYOFBV1_ez7yKe5hdsrbxK0iVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=a0cfa342-deb4-4ea8-a19b-24a05eb444c1&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=158724d6a3493f929532459acd020f2d6&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=02197efdafb3401e9d5a69f8deb4f5e2&tp=MobileHotelSearch",
                    "auction_offer_key": "02197efdafb3401e9d5a69f8deb4f5e2"
                },
                {
                    "content_id": "240118215",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=240118215&geo=25272770&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=4&silo=17377&bucket=895478&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=yY16H34sWLS9U2gQzZz1ZUawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvUlU29tqkSC3zSP7-3lzfV90COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLqVkoPWrrvDC9d3pDzQlhl9FW56ZaNfqyCZ36Q8HTA-twEHQ3hX6TEw0tF2UY4XOCnMyaZJbLYoS7Eu25eIssNF5XLOCgHnYdAypZxrAELZyrm4JRhwRKlFkQRGibvdC3p6nYGVyIJd3GAaUpV7f-4A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=a0cfa342-deb4-4ea8-a19b-24a05eb444c1&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18338f93431b0e3a99688cb097ce6a244&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=25be82974da34588909b7ea84154b014&tp=MobileHotelSearch",
                    "auction_offer_key": "25be82974da34588909b7ea84154b014"
                },
                {
                    "content_id": "244961363",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=244961363&geo=25272770&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=4&silo=33308&bucket=966843&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=78nGlvUvdvG2XzYIxeqfuCdgTJK8HXfYRlfQuL7YLXxW_0A4aGI7TTFyJhOMsFg9zUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5fGov6ztKywB8v6YVlHaK7mIxY9SqMxlcJm1HJVAmFvgNG-gH_v0UbctF3gcIIG-K68spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=a0cfa342-deb4-4ea8-a19b-24a05eb444c1&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1c7a09e59bc43f439476678d1e0ee309d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=59a4163963134a8989af1a78cf21403d&tp=MobileHotelSearch",
                    "auction_offer_key": "59a4163963134a8989af1a78cf21403d"
                },
                {
                    "content_id": "237734186",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=237734186&geo=25272770&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=4&silo=5122&bucket=895087&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=qkhWUTIieD7aH1FuDOoGB0cSySlXU2trcV6OnXKPrKb_xnxK3UlH82y0Mzbp1TqIX2-2vDSc80ghcmEh3gGdG6Dd2Tymz-KYX0fyVW47RdJMEq7p28XswFf7nLELj1y3XDmXwbvfjEfNyjFm-j0ox3yTEZ4tg5PDnqyZ3EauZ82aee_irnfq92PCayDnAaGjczJpklstihLsS7bl4iyw0Xlcs4KAedh0DKlnGsAQtnKubglGHBEqUWRBEaJu90LenqdgZXIgl3cYBpSlXt_7gA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=a0cfa342-deb4-4ea8-a19b-24a05eb444c1&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1dc1d5e523738f9c061e4603d52604ca3&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=13fd2ed407d34cb49670eae07a2d6390&tp=MobileHotelSearch",
                    "auction_offer_key": "13fd2ed407d34cb49670eae07a2d6390"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "0.0",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "f9780ea6-7a40-4181-b2e1-36ad755d817b"
    },
    {
        "location_id": "455866",
        "name": "Savera Hotel",
        "latitude": "13.045968",
        "longitude": "80.26114",
        "num_reviews": "2729",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/e2/e6/02/executive-club-room--v16390082.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/e2/e6/02/executive-club-room--v16390082.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2600",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/e2/e6/02/executive-club-room--v16390082.jpg",
                    "height": "1733"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/e2/e6/02/executive-club-room--v16390082.jpg",
                    "height": "450"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/e2/e6/02/executive-club-room--v16390082.jpg",
                    "height": "205"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-03-26T16:15:27-0400",
            "caption": "The Executive Club Room at the Savera Hotel",
            "id": "266528258",
            "helpful_votes": "0",
            "published_date": "2017-07-14T11:57:13-0400",
            "user": null
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.799044609069824",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "18",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#18 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "3.291886215681475",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$63 - $86",
        "neighborhood_info": [
            {
                "location_id": "13087512",
                "name": "Mylapore"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "32490801",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=32490801&geo=455866&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=12&silo=10500&bucket=903023&nrank=2&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=oXKW0lgKcNpa4McfkPpTYRhDFBhBGFMoTiNwTQdS8MED9Nn39_uOVivmYKTGRvvrAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96jtEJZa54Guxs7ZxYI9gWsTD92ZM4OOi0HngtS-vZFH8MZnyuzOayrM_kDzX85s_htDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1fbb09c7adf3ebe2e2ab2b8eefa8981b3&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9f6ebe14db804fe89d11961ad5a90e38&tp=MobileHotelSearch",
                    "auction_offer_key": "9f6ebe14db804fe89d11961ad5a90e38"
                },
                {
                    "content_id": "34575058",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=34575058&geo=455866&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=12&silo=6103&bucket=901739&nrank=1&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=XtWurjLYPONN1_LmRJphmHqv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM48ls_GXNRIkhvr1ovO5u021iUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrnbfI67DEAtUslgT7FeqRoEVbnplo1-rIJnfpDwdMD61Buq20vuumu5Tcbt-RMbRg9NYiS0Pb6LbIIZMVw68bCQIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12532990cda8353973156de0058aff372&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=cf6ea7b57c54400699b537c3ba2c5646&tp=MobileHotelSearch",
                    "auction_offer_key": "cf6ea7b57c54400699b537c3ba2c5646"
                },
                {
                    "content_id": "32675502",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=32675502&geo=455866&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=12&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=Ew2BaXwyIlrpEstK4MgJy2O9ZmiX9y04TJt583qVd7WibvFmZta8EWm50NO1WhhuRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TT-OXytWRRNXQJ3UXtNg7WHtmdFA8XCrgAz0_XSHtHC8GhRPUiVPmkJ9bN9oKq1FLTiVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1d45982f94faa5a4ee6ae84befe90c907&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ba40bae2b48c4f4d8459ee5523a2e828&tp=MobileHotelSearch",
                    "auction_offer_key": "ba40bae2b48c4f4d8459ee5523a2e828"
                },
                {
                    "content_id": "53934928",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=53934928&geo=455866&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=12&silo=11456&bucket=860112&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=qTR9KbHUL6a_Z83j2MBjR_glwkHErrRMuGt2aIqtQSYZ1phf4jgQncWwasrAicrDfJMRni2Dk8OerJncRq5nzdwAcIulSkuL6uj9feYa5qVKe6PTE0w-H_JJ8D_b-UuKAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1de6283729e9f8ce63f545da9a104616d&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=b9999312c92645bfb5c059a4d4f56a5d&tp=MobileHotelSearch",
                    "auction_offer_key": "b9999312c92645bfb5c059a4d4f56a5d"
                },
                {
                    "content_id": "78925803",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78925803&geo=455866&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=12&silo=20728&bucket=862895&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=CwDJfr5P74i2FxPm2HFh0Gm_Ad2WVMUCYFul6YcrnSwFnOFw-DXvb8hWxHKVdD311X9GW9K-M6HKJsA2Rz8ZHwdJOUuEigWE7TKkTVSbwa844WrbrFbIoYp4KEZcF4xfHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1dc4de6e557097c6720dd3544a9c0efee&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=23f78e46486c4fe4b04201dff9989fd8&tp=MobileHotelSearch",
                    "auction_offer_key": "23f78e46486c4fe4b04201dff9989fd8"
                },
                {
                    "content_id": "115615876",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=115615876&geo=455866&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=12&silo=13669&bucket=899272&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJCM5XxdRx2LcdhLVsC_Ju-YjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3wwmchA-_RdYRsHixxyZbmpHUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=13ffdf8a102e506a131caa92ca00bd2a6&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=87489d1f33c04e98acb44937e75f8587&tp=MobileHotelSearch",
                    "auction_offer_key": "87489d1f33c04e98acb44937e75f8587"
                },
                {
                    "content_id": "129731522",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=129731522&geo=455866&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=12&silo=40511&bucket=944068&nrank=7&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOQRiN3mQwZHnvvCSZzbhp2wb-ujXh9nvcoJzglRZba35dA2bqd-Yi3Y-1bJq9vC_768spuVMscxtkDKgW3Yc8EwLWwg08mPWhPcq3p5ecpiFVz6f44HLVusj7ixy3z3sOsfhIbC-aqXVXGBlll-TiBQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=11e9b3135b584463715ed1777170785f0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5989ff8b4cda4276bdb5367158b7f6c8&tp=MobileHotelSearch",
                    "auction_offer_key": "5989ff8b4cda4276bdb5367158b7f6c8"
                },
                {
                    "content_id": "60405702",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60405702&geo=455866&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=12&silo=35404&bucket=914257&nrank=8&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=KRz5pUCVxHYcvGzUViV9IkfSgJC_DdXRwzYJ4Xf9g8sYKAAALi92Q3jFKZMgKejI1X9GW9K-M6HKJsA2Rz8ZH_-gfw83USEQeVWMTP9XXmffF7eRGAFUjfdPHvC3yvFqAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1b12f656d9ca9d05357d5dc1a5f5dbd23&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=00f313892ead4aa7b249b1d122017147&tp=MobileHotelSearch",
                    "auction_offer_key": "00f313892ead4aa7b249b1d122017147"
                },
                {
                    "content_id": "42907167",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42907167&geo=455866&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=12&silo=17377&bucket=927871&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCWEU-5YlKC6NJlRQGnVS3LY2mX1HYO_rIcJn6n79MaCGWZLX_euRbiVOikfLxC2msFWmeSo3PjjKsUikh41EaIN-LvnfW3ZiUcmxdkDKjfLfmXCA4XSZvfl1jkpv3v30npMZpnl9orsEYyQSRNHG1ac&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=176da55ec5ca3ddce1ffc957e4035b6b0&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=0a3aa1b55c844e62a6389c1c58b584e7&tp=MobileHotelSearch",
                    "auction_offer_key": "0a3aa1b55c844e62a6389c1c58b584e7"
                },
                {
                    "content_id": "246432728",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246432728&geo=455866&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=12&silo=47774&bucket=998819&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=h3I-NKkT_L5sYnaYHVijwBh2gf2XGPeVF10RhwWoz1kLqjFgwYhCMNCYchXka_divZhPDMWtDYdPKMBx6n6EQt9y2bE6H3OGSla-z_XwXsc6JYRdNmDZ9XbpP9oIFvEVMZp3olKCtRLgUKwT22aiuk6Wfiy9C5saYD1SsVgUM2ECBSpm2bq1T5QxPrXAPvkHoR3X7NKGirZZ2XRwnpp3V9Brv0m2w2AhOXubRROG8Tg&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1a4c7313a6bda52f00b4ec49cfa810548&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=0c95373d33c742ac88792b32c6bdf788&tp=MobileHotelSearch",
                    "auction_offer_key": "0c95373d33c742ac88792b32c6bdf788"
                },
                {
                    "content_id": "33216661",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=33216661&geo=455866&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=12&silo=5122&bucket=895087&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=qkhWUTIieD7aH1FuDOoGB0cSySlXU2trcV6OnXKPrKb_xnxK3UlH82y0Mzbp1TqIX2-2vDSc80ghcmEh3gGdG6Dd2Tymz-KYX0fyVW47RdJMEq7p28XswFf7nLELj1y3uW3X1BaQ-q26Cm_99R8SVHyTEZ4tg5PDnqyZ3EauZ82aee_irnfq92PCayDnAaGjPR0VActZAyGTbu-i_T8f93lcs4KAedh0DKlnGsAQtnKubglGHBEqUWRBEaJu90LenqdgZXIgl3cYBpSlXt_7gA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=18503bc00ed399da11f5e547aea7d158a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=e44418b28a6445b899a18ea76ae0e067&tp=MobileHotelSearch",
                    "auction_offer_key": "e44418b28a6445b899a18ea76ae0e067"
                },
                {
                    "content_id": "174637929",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174637929&geo=455866&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=12&silo=33308&bucket=894612&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=MbVbvyGy4UnlY3oRT_3iJEfUmuB981e0nceNnfiLXqQxT8MPwuXbEaeVCbEUpOCha9vOTqsnZEDK36UjKWHQ9_y_In_KwQAG3itlQRM5TqUlASme_ql4XHtTtjiwMoKoJNli4kG8asDWT6Y-QEWngVZqsPiPtwxIwHtUkmhLZ4CutFbTWNQ8QLKsiYLLAzFaHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=1be6837d-8f03-4985-ba1e-d300148f84d2&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=164c3ff148f82e47731b01ada6820fdd4&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=415cd488574e4c158ce2fc4c3efc58ff&tp=MobileHotelSearch",
                    "auction_offer_key": "415cd488574e4c158ce2fc4c3efc58ff"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "4.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "3a6aefcd-5673-439e-8af9-4fc043d59de0"
    },
    {
        "location_id": "1150113",
        "name": "Raj Palace",
        "latitude": "13.037488",
        "longitude": "80.23962",
        "num_reviews": "491",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/2c/4f/0b/raj-palace.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/2c/4f/0b/raj-palace.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/2c/4f/0b/raj-palace.jpg",
                    "height": "960"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/2c/4f/0b/raj-palace.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/27/2c/4f/0b/raj-palace.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2022-12-04T09:23:52-0500",
            "caption": "",
            "id": "657215243",
            "helpful_votes": "0",
            "published_date": "2022-12-04T09:23:52-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.817753791809082",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "19",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#19 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "4.639377951217822",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$32 - $37",
        "neighborhood_info": [
            {
                "location_id": "13087510",
                "name": "T. Nagar"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "42909637",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=42909637&geo=1150113&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=8&silo=17377&bucket=895478&nrank=1&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=yY16H34sWLS9U2gQzZz1ZUawtslz1QA9xi_8POLEQ72O7T43hdT0xf2dcv5yzFOvUlU29tqkSC3zSP7-3lzfV90COp6r8o9SHHTX-l_xmFeZ2zM3bZtxJCLYtaSsw34sCO3P6Yl1SCdtYKC61dNjLk5sgSSaYWBc3OvIg-WLkHg2mX1HYO_rIcJn6n79MaCGzNVD0no-FJOaZ_ghr4i-m8vWqe0toOpdyqU_4JRslDNQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12114698fb9f115af22602859682a137a&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=61843e834ce144bbbdb93812070597f6&tp=MobileHotelSearch",
                    "auction_offer_key": "61843e834ce144bbbdb93812070597f6"
                },
                {
                    "content_id": "143451454",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=143451454&geo=1150113&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=8&silo=35404&bucket=914257&nrank=2&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YA_oOQ7sfEM6x58KrDMKeppUya437F6-AlRniSxmvVkQ5ilhX1B5fZLX5IqM-XrsiMShykcf-t_lImP_P3J01lKlqpUSRho_eGGTwyJn-nFpiD8inOt4X-vlPc6BT8y8eVyzgoB52HQMqWcawBC2cq5uCUYcESpRZEERom73Qt6ep2BlciCXdxgGlKVe3_uA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=122f8c6dee15562f56b12e86562ca2ecd&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d3eec434e37141a7b00467c522b71509&tp=MobileHotelSearch",
                    "auction_offer_key": "d3eec434e37141a7b00467c522b71509"
                },
                {
                    "content_id": "172799653",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=172799653&geo=1150113&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=8&silo=40511&bucket=944068&nrank=4&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOOOF7pmIdNWMj5utdqzmVfglKOnord04aCT04ompKKOsNbv3wiyXMi7yW3aln2_nedZGSbjkolhIZZQb_Ff-szM-KfMOSofqqnmOoP5SZ7q3cPLjkxG4mIdTHHv3D6JbgoGEtBJm1TElx5exKyaVz1A&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15ac6c836168f995dfcad5e8fefeca759&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=ff71b9a00b344358bdec5786c6f852a9&tp=MobileHotelSearch",
                    "auction_offer_key": "ff71b9a00b344358bdec5786c6f852a9"
                },
                {
                    "content_id": "132690029",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=132690029&geo=1150113&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=8&silo=13669&bucket=899272&nrank=3&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJ2qsP09ApFCpcCC0-hrP5dYjFj1KozGVwmbUclUCYW-CQ5nKKcKsazeDMxV-Rc0KUuN9mHzdw_piOqOlPpYu6WduzglrSlCtPd1ptC9iFakUCLxJ2m8JyXKk7tzvMsBuzrVRX7KLrLCp6y8MKv51fq&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1debfec80bd31434423a69db5ca181b43&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=01646a53a6504d28940b53c30949f774&tp=MobileHotelSearch",
                    "auction_offer_key": "01646a53a6504d28940b53c30949f774"
                },
                {
                    "content_id": "40347654",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=40347654&geo=1150113&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=8&silo=5122&bucket=895087&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=qkhWUTIieD7aH1FuDOoGB0cSySlXU2trcV6OnXKPrKb_xnxK3UlH82y0Mzbp1TqIX2-2vDSc80ghcmEh3gGdG6Dd2Tymz-KYX0fyVW47RdJMEq7p28XswFf7nLELj1y35wleuA1Z7mbDWSJV5cB1bHyTEZ4tg5PDnqyZ3EauZ82aee_irnfq92PCayDnAaGj6mFhpIuHerXO_ybIP5F86H4u-d9bdmJRybF2QMqN8t-ZcIDhdJm9-XWOSm_e_fSekxmmeX2iuwRjJBJE0cbVpw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=14ee7b18bae5f14c70d9e891d8c9abade&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=eb95b43c5b4f46e695e557b30f76eca6&tp=MobileHotelSearch",
                    "auction_offer_key": "eb95b43c5b4f46e695e557b30f76eca6"
                },
                {
                    "content_id": "174634116",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174634116&geo=1150113&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=8&silo=33308&bucket=966843&nrank=6&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=MbVbvyGy4UnlY3oRT_3iJCZv2h0rFYj688_lnbzGooYuPGQSbiFK01J3oPQmlQnzuTTIPeoIKNrosw8sQRHa1wwB5Qh4j5u3PV515pq7t7n6J8SbIb-Uyusf04dl8mtO8DJv4FUrrhyXNSjnrxoENTdek_3TgHv8hYYiecO8YmCNLpWt5QWqEhIcpYfkgnl7ve-poZi_MEY2njXCD28ehiT6gtfn1FUJ0hlpwr89lOH7AyRdSDRWOpi7KTTrJAobIv6qVHZVUi6w_KP5Lzu8Cw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=106dbd0ab66a9a82480e036e5eb799bdc&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=78931b7ec56e4df68cc57737ff92632b&tp=MobileHotelSearch",
                    "auction_offer_key": "78931b7ec56e4df68cc57737ff92632b"
                },
                {
                    "content_id": "246439653",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246439653&geo=1150113&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=8&silo=47774&bucket=998819&nrank=6&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9PYiqx-MVV6RnKN-sCW2VQbe6FCv1TLMQNXkL9vJnDERXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2hr4vKCwkkYnAJvrwb9eEYV8kxGeLYOTw56smdxGrmfNYjX5wJq4lUaC6QKpUil3h68V3gHu0yzHBj562QGdoqnj3IAGSDmckuizkqVkCZ4vj2OXdLghbXFsm5vV00UhGyDK7nN-vn_IKyG_46oXfv8&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16b63d530e8afa16a7555371912a6cdcc&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=6b1157ede7414aaf84ed2115734e522a&tp=MobileHotelSearch",
                    "auction_offer_key": "6b1157ede7414aaf84ed2115734e522a"
                },
                {
                    "content_id": "119880190",
                    "provider_display_name": "SuperTravel",
                    "internal_provider_name": "SnapTravel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Snap_Super_384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=SnapTravel&src=119880190&geo=1150113&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=8&silo=29510&bucket=884014&nrank=6&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=tAYP_c8ihMEmovLdULc_rtj8PR_2odbid1dQffkh-Z0qJT-ZVG8ixtYEJe2Xti-rRVuemWjX6sgmd-kPB0wPrZbsVzKIyKf1IAWOdmXHkiSq7J808CAL8cd8cZd-8f4UUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=0d0c4eb3-2d48-4fc2-a5aa-1c9de53bdfc0&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16dacc4a4f00af2cef99f849006d5c2d2&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=7e03d1afc69743ebb02c76df54f92b84&tp=MobileHotelSearch",
                    "auction_offer_key": "7e03d1afc69743ebb02c76df54f92b84"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "3.0",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "6779f184-dcc3-419b-859f-c3d66d124041"
    },
    {
        "location_id": "4097261",
        "name": "E Hotel",
        "latitude": "13.058696",
        "longitude": "80.263084",
        "num_reviews": "1001",
        "timezone": "Asia/Kolkata",
        "location_string": "Chennai (Madras), Chennai District, Tamil Nadu",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/24/35/35/33/e-hotel.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/24/35/35/33/e-hotel.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "4704",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/24/35/35/33/e-hotel.jpg",
                    "height": "3136"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/24/35/35/33/e-hotel.jpg",
                    "height": "367"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/24/35/35/33/e-hotel.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2022-06-24T05:50:31-0400",
            "caption": "hotel front view",
            "id": "607466803",
            "helpful_votes": "0",
            "published_date": "2022-06-24T05:50:31-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Chennai (Madras) Places to Stay",
        "raw_ranking": "4.7253098487854",
        "ranking_geo": "Chennai (Madras)",
        "ranking_geo_id": "304556",
        "ranking_position": "20",
        "ranking_denominator": "2754",
        "ranking_category": "hotel",
        "ranking": "#20 Best Value of 2,754 places to stay in Chennai (Madras)",
        "subcategory_type": "hotel",
        "subcategory_type_label": "Hotel",
        "distance": "2.494045999390056",
        "distance_string": null,
        "bearing": "southwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$63 - $92",
        "neighborhood_info": [
            {
                "location_id": "13087587",
                "name": "Royapettah"
            },
            {
                "location_id": "20485018",
                "name": "Nungambakkam"
            }
        ],
        "hac_offers": {
            "availability": "pending",
            "offers": [
                {
                    "content_id": "50715507",
                    "provider_display_name": "Hotels.com",
                    "internal_provider_name": "HotelsCom2",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Trip_Hotels%20Product%20Logo%20Full%20Colour%20Dark%20Blue%20RGB%20copy.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=50715507&geo=4097261&from=HotelDateSearch_api&slot=1&matchID=1&oos=0&cnt=12&silo=6103&bucket=901739&nrank=2&crank=1&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=XhmdQA5gulV500gsrPi7L3qv9wvhqf0kQl-X2PNlPh7oGtSvvg-6HsbqK4ippGM4LkyDy5XFHyYIoLYbK8gP1liUm3FNa-b9QSKFQVVe97gTV3P542NVVHMpuLI-AnRrMQYI2PZ1-1wTpUvaBUBK70Vbnplo1-rIJnfpDwdMD61nHPeUDIkFbQ7lM3XUIhUSpM95WIZy_1-YO_7_-OFTEQIFKmbZurVPlDE-tcA--QehHdfs0oaKtlnZdHCemndX0Gu_SbbDYCE5e5tFE4bxOA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15da944c43f5c375225f9e167506d1215&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=feb4d3da17c2429faba06b4e1e9af8bd&tp=MobileHotelSearch",
                    "auction_offer_key": "feb4d3da17c2429faba06b4e1e9af8bd"
                },
                {
                    "content_id": "48993051",
                    "provider_display_name": "Booking.com",
                    "internal_provider_name": "BookingCom",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Booking_Com_v2_384x164_Blue.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingCom&src=48993051&geo=4097261&from=HotelDateSearch_api&slot=2&matchID=1&oos=0&cnt=12&silo=10500&bucket=903023&nrank=1&crank=2&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=nsBQJQnnVk3c_yqxjhTBOBhDFBhBGFMoTiNwTQdS8MELDHF5Y5FROWepsVOwQmfXAtt6pbR445bw7QVj14jpsNLILxR3R6FhpDeK1v9yJpOoHfpzH0V8EL9Ne1NY5z96qnh9RRA6Z1HNDN4mZVTm2dzb7VSi4qaKdNbas5Ljo8baCAdTvKSU-woE6y6qjRQdtDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1869afb2a2b0b215c8f1d66b07051f13b&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=9cbeb4b8901b488983e5430ccbbb1a2b&tp=MobileHotelSearch",
                    "auction_offer_key": "9cbeb4b8901b488983e5430ccbbb1a2b"
                },
                {
                    "content_id": "50249968",
                    "provider_display_name": "Expedia.com",
                    "internal_provider_name": "Expedia",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/expedia_logo_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_link",
                    "link": "https://www.tripadvisor.com/Commerce?p=Expedia&src=50249968&geo=4097261&from=HotelDateSearch_api&slot=3&matchID=1&oos=0&cnt=12&silo=4310&bucket=910482&nrank=3&crank=3&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=R7j0t3zIAt6kCJ-8SUW-0GO9ZmiX9y04TJt583qVd7W6UL7hofSc41GNM27PbfOkRjCCKQyvfhOxgmc_4gZqf96udaYuDGA594q06sOSYwYWpANuTyrE869ntQKcS7TTMrHGcZGM2CHOMoCxSJmPptmdFA8XCrgAz0_XSHtHC8FPMuBhFt0SE0hPKHc4b8tviVWY96mbCFxT2UDHOlD_sVpdDC18aJs1opR7p-aTT76GfzjK9WBwXtWlU5N1ala4XKcgMxgyoZza_oQ6RtLUow&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1348be34e726b02d3e32de53f63930ba7&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2dc7affba0fd400d99faa06e94f6c1c5&tp=MobileHotelSearch",
                    "auction_offer_key": "2dc7affba0fd400d99faa06e94f6c1c5"
                },
                {
                    "content_id": "54284813",
                    "provider_display_name": "Travelocity",
                    "internal_provider_name": "TravelocityEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/travelocity_new_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=TravelocityEWS&src=54284813&geo=4097261&from=HotelDateSearch_api&slot=4&matchID=1&oos=0&cnt=12&silo=11456&bucket=860112&nrank=4&crank=4&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=qTR9KbHUL6a_Z83j2MBjR_glwkHErrRMuGt2aIqtQSa0tDflG5HADopyYZycg0PafJMRni2Dk8OerJncRq5nzdwAcIulSkuL6uj9feYa5qV4rdxHnKjfHx-vl2B5nwDqAgUqZtm6tU-UMT61wD75B6Ed1-zShoq2Wdl0cJ6ad1fQa79JtsNgITl7m0UThvE4&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=161e3609ccfb2203b7029b41841aee578&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=63735f4cc77b4b06886451305fce1b8a&tp=MobileHotelSearch",
                    "auction_offer_key": "63735f4cc77b4b06886451305fce1b8a"
                },
                {
                    "content_id": "78965549",
                    "provider_display_name": "Orbitz.com",
                    "internal_provider_name": "OrbitzEWS",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png",
                    "treatment": "co_branded",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=OrbitzEWS&src=78965549&geo=4097261&from=HotelDateSearch_api&slot=5&matchID=1&oos=0&cnt=12&silo=20728&bucket=862895&nrank=5&crank=5&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=CwDJfr5P74i2FxPm2HFh0Gm_Ad2WVMUCYFul6YcrnSwPwgIMa0Uf351n-Ts98DvW1X9GW9K-M6HKJsA2Rz8ZHwdJOUuEigWE7TKkTVSbwa8D8RcrHQzP8LOMyqiyQC7PHR-1BslCJfEZL05n9CgmXpPD5hy9qGEfk6EhRutxI1StLhZy9Io9v9ODWmeljIlfXuMWZd31h103-g0wRibRnw&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1175d0c33782d67cb235f57861ca6a1b9&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3167f396bf5a4d5089784adba09c3eaa&tp=MobileHotelSearch",
                    "auction_offer_key": "3167f396bf5a4d5089784adba09c3eaa"
                },
                {
                    "content_id": "132701140",
                    "provider_display_name": "Trip.com",
                    "internal_provider_name": "CtripTA",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/trip_logo_tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=CtripTA&src=132701140&geo=4097261&from=HotelDateSearch_api&slot=6&matchID=1&oos=0&cnt=12&silo=13669&bucket=899272&nrank=7&crank=6&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=TdFXaCbOuIq5LNUWCWVpUBXnM0RvbbImB081vRJxs4rikdfdnYdWCQ9108CLm1jahRi41cuA0rd0k2Wm91hH64xtC-zUBcvWD2Z23uIvjgJ2qsP09ApFCpcCC0-hrP5dYjFj1KozGVwmbUclUCYW-AM51DzKJcqWcNnkS_XF3ww9UnIsxjGrokr7EZKo9sxXUHF0rbVNI8bR3k758WbEjw9KMDE40iYh-OYV6rx_ejsdBVDJudwMoC5AFOikwE2l&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=100ec90323d3eecad61339f24f4f3cd90&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=3e03249f0bde418884146131f9b504b1&tp=MobileHotelSearch",
                    "auction_offer_key": "3e03249f0bde418884146131f9b504b1"
                },
                {
                    "content_id": "143801806",
                    "provider_display_name": "StayForLong",
                    "internal_provider_name": "StayForLong",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/logo-sfl-pink-tripadvisor.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=StayForLong&src=143801806&geo=4097261&from=HotelDateSearch_api&slot=7&matchID=1&oos=0&cnt=12&silo=40511&bucket=944068&nrank=8&crank=7&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=9cvL0H2d7r-S25o-W3b98rv5FMffsxQed-28NMcwZNfb0-IZQqWNxnhc-PjgGbNcJfs0k6Jwfo7MBAZXiTYFNC212V5fe2i-fOjGM_yU05LKqnWvvpbM1aMBELD4YwZOyuR8TRxMXOmrct3yKQRVmQlKOnord04aCT04ompKKOuLEWvfkN_3jJ2TZjp9IJZ-tDRUphklFjaKlLCkmWspYSZvbNkxKKVqDxPn7YktJc7guAAy3SAN7mokSOae-8aioUy6lpHkF8qw_DdjG8YBaA&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ee4f3a8a9138ce348ad2e5eff6ec1d55&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=2a599465156a4930a20861c665c01602&tp=MobileHotelSearch",
                    "auction_offer_key": "2a599465156a4930a20861c665c01602"
                },
                {
                    "content_id": "60711436",
                    "provider_display_name": "eDreams",
                    "internal_provider_name": "BookingeDreamsWL",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/ed_16852.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=BookingeDreamsWL&src=60711436&geo=4097261&from=HotelDateSearch_api&slot=8&matchID=1&oos=0&cnt=12&silo=35404&bucket=914257&nrank=6&crank=8&clt=M&ttype=MobileCR&tm=270244121&managed=true&capped=false&gosox=YA_oOQ7sfEM6x58KrDMKeppUya437F6-AlRniSxmvVl1AhNaHrwkojaLnDg7KsOEiMShykcf-t_lImP_P3J01hTvDTETM_lgp6Ldh-4Z2QpCj9xRmwxfXES5lFJwM1VxyUNKAQB4vLTQhMtjSo_S47s6bzFeRNMc_9m5VotCJYFhZJkFsa4SVmtArqym__Ij&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1ddada548c9fb03c4d2460770df0b22de&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=5cc1215fa24c4612a3470400aeeef2de&tp=MobileHotelSearch",
                    "auction_offer_key": "5cc1215fa24c4612a3470400aeeef2de"
                },
                {
                    "content_id": "174636912",
                    "provider_display_name": "Vio.com",
                    "internal_provider_name": "FindHotel",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Vio_com.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=FindHotel&src=174636912&geo=4097261&from=HotelDateSearch_api&slot=9&matchID=1&oos=0&cnt=12&silo=33308&bucket=966843&nrank=9&crank=9&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=3-XXwxb-jB7uYVwaAj4AAidgTJK8HXfYRlfQuL7YLXyqOG2ZsoZDG6vLjaFbDHNHzUkbz-6Ya6KFJsQqD3adHc3Ek30B5bOJQ52gh9VPFPuxaEws0WNE9Qt0_v26GnF5saKaKr5g7aeaEaTDyec-pn8M2WXq1sDbdfTXgGoSOsWXfMS4iD_JeTQJV6V8qBaACQaRwVupbgq2JnhsKM4_ANsncb2tAlwgzVfnsx8WaaYK6UwEMdPHGRf8Dn9YrgDi37WPFHZiHp08uvzvqo8kkQ&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=15495a630a98346072fb74b78a104b377&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=af0f8ff59b0b4c2f978bce91bd1f1f80&tp=MobileHotelSearch",
                    "auction_offer_key": "af0f8ff59b0b4c2f978bce91bd1f1f80"
                },
                {
                    "content_id": "55597041",
                    "provider_display_name": "Priceline",
                    "internal_provider_name": "Priceline",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Priceline&src=55597041&geo=4097261&from=HotelDateSearch_api&slot=10&matchID=1&oos=0&cnt=12&silo=17377&bucket=927871&nrank=10&crank=10&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=QjiipF2Mn5S3weE2uti3e4OsR46-WDBNv-izQwgmVs38bHMIs4WgEoOJXVnr6dvNXx3OilqvGlsX3HEHhHxuseP1MFRL3VeAr4o23gtdXzZYGvz3kloaQJMpn-FDNDfY9gXhBF4o5Wn-XfFzXHenCbfYLg8OMMwq0yAm7ZkNZE5iMWPUqjMZXCZtRyVQJhb46807XXhXvYkNFye148Cw_zqi_2_lq_4H6Tpl2-GVILJQcXSttU0jxtHeTvnxZsSPD0owMTjSJiH45hXqvH96Ox0FUMm53AygLkAU6KTATaU&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=16b399b872e5cfdac775688c67b20b4f1&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=990e63a467c348699459942403b60e1b&tp=MobileHotelSearch",
                    "auction_offer_key": "990e63a467c348699459942403b60e1b"
                },
                {
                    "content_id": "49812260",
                    "provider_display_name": "Agoda.com",
                    "internal_provider_name": "Agoda",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Agoda.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Agoda&src=49812260&geo=4097261&from=HotelDateSearch_api&slot=11&matchID=1&oos=0&cnt=12&silo=5122&bucket=895087&nrank=11&crank=11&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=gYk2-R6okZ0_Nsl-B8wn3fIrRKAuBU374X62P8Vlh1nQX2bM5i098rL5QNztCfN45ja0sEwmCp1D34qBNhvyXqvbemyfxwl-J3aS8a8eiX7uZwQz_GGqn6VxfpqQfWmuLURy9_Lozk1ujp4BWMrqTvBjB_tC_waADwjOIL3nvZXC7MA2D_v6MPCTeeuyGOBjjMJfhB09OXSEr9AMQxhhTIlVmPepmwhcU9lAxzpQ_7FaXQwtfGibNaKUe6fmk0--hn84yvVgcF7VpVOTdWpWuFynIDMYMqGc2v6EOkbS1KM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=12eee9b68e03cbdc0f68c38e4e5fcf660&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=d499c6c31d964120a884f77096fb9450&tp=MobileHotelSearch",
                    "auction_offer_key": "d499c6c31d964120a884f77096fb9450"
                },
                {
                    "content_id": "246570304",
                    "provider_display_name": "Skyscanner",
                    "internal_provider_name": "Skyscanner",
                    "logo": "https://static.tacdn.com/img2/branding/hotels/Skyscanner%20384x164.png",
                    "treatment": "none",
                    "is_bookable": false,
                    "availability": "pending",
                    "display_style": "text_hidden",
                    "link": "https://www.tripadvisor.com/Commerce?p=Skyscanner&src=246570304&geo=4097261&from=HotelDateSearch_api&slot=12&matchID=1&oos=0&cnt=12&silo=47774&bucket=998819&nrank=12&crank=12&clt=M&ttype=MobileCR&tm=270244121&managed=false&capped=false&gosox=XlLqlZ3FoIy308A7hLC9Qh9PcMv5t7wit3ZEE0cy8uIRXZDMLJk7JtnzVCHCaLJfd7StGtI0fUeSgGhyRW9e2lTgCtIfBsJyCqWaJiYzVBB8kxGeLYOTw56smdxGrmfN1iF8c4-8DQt7RGcnPPJK04au92qxyAc4mLQ-Ki04YQ9l_DAdhT0YJ6UdHuyNc0hEo8WSEqutbvm78gnU7jMYkvz5LM73mAd7X-t4-ISCIGM&pm=BR&hac=INITIALIZED&adults=1&child_rm_ages=&inDay=27&outDay=28&rooms=1&inMonth=7&inYear=2023&outMonth=7&outYear=2023&auid=edfc0a0e-1f0c-43e7-9072-bad5e1d33fb8&def_d=true&bld=L_1,D_1,G_1,W_4,U_1,C_230727,T_20&bh=true&cs=1447c32de084fa230301cade8cf156a83&area=QC_META_API&ik=ad98c031ecb34876ad3c0315beb8b9a2&dated=true&aok=de3713b7e79d45609961b5b68f34a5de&tp=MobileHotelSearch",
                    "auction_offer_key": "de3713b7e79d45609961b5b68f34a5de"
                }
            ],
            "all_booking_offers": []
        },
        "hotel_class": "3.5",
        "hotel_class_attribution": "This property is classified according to Giata.",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "efa3b7ad-634e-419c-ad91-506ec5cce26a"
    }
]

export {
    data1,
    backupLocationDetails,
    backUpSearchData,
    backUpAttractions,
    hotelBackup
}