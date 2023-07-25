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

export {
    data1,
    backupLocationDetails,
    backUpSearchData,
    backUpAttractions
}