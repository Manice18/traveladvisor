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

export {
    data1,
    backupLocationDetails,
    backUpSearchData
}