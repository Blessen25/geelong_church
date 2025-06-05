from django.db import models;
from django.utils import timezone
import phonenumbers
from phonenumbers import geocoder
import logging

logger = logging.getLogger(__name__)
# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField(max_length=1000)
    country = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)


    def save(self, *args, **kwargs):
        try:
            parsed_number = phonenumbers.parse(self.phone_number, None)
            # Check if the number is possible or valid
            if phonenumbers.is_possible_number(parsed_number) or phonenumbers.is_valid_number(parsed_number):
                country_code = parsed_number.country_code  # e.g., 61
                self.country = self.get_country_from_code(country_code)
                logger.info(f"Set country to {self.country} for phone number {self.phone_number}")
            else:
                self.country = "Unknown"
                logger.warning(f"Invalid or impossible phone number {self.phone_number}, country set to Unknown")
        except phonenumbers.NumberParseException as e:
            self.country = "Unknown"
            logger.error(f"Error parsing phone number {self.phone_number}: {e}")
        
        if self.is_deleted and self.deleted_at is None:
            self.deleted_at = timezone.localtime(timezone.now())
        elif not self.is_deleted:
            self.deleted_at = None
        
        super().save(*args, **kwargs)

    def get_country_from_code(self, country_code):
        """Map country code to country name."""
        country_code_map = {
                    1: "United States", 
                    7: "Russia",
                    20: "Egypt",
                    27: "South Africa",
                    30: "Greece",
                    31: "Netherlands",
                    32: "Belgium",
                    33: "France",
                    34: "Spain",
                    36: "Hungary",
                    39: "Italy",
                    40: "Romania",
                    41: "Switzerland",
                    43: "Austria",
                    44: "United Kingdom",
                    45: "Denmark",
                    46: "Sweden",
                    47: "Norway",
                    48: "Poland",
                    49: "Germany",
                    51: "Peru",
                    52: "Mexico",
                    53: "Cuba",
                    54: "Argentina",
                    55: "Brazil",
                    56: "Chile",
                    57: "Colombia",
                    58: "Venezuela",
                    60: "Malaysia",
                    61: "Australia",
                    62: "Indonesia",
                    63: "Philippines",
                    64: "New Zealand",
                    65: "Singapore",
                    66: "Thailand",
                    81: "Japan",
                    82: "South Korea",
                    84: "Vietnam",
                    86: "China",
                    90: "Turkey",
                    91: "India",
                    92: "Pakistan",
                    93: "Afghanistan",
                    94: "Sri Lanka",
                    95: "Myanmar",
                    98: "Iran",
                    211: "South Sudan",
                    212: "Morocco",
                    213: "Algeria",
                    216: "Tunisia",
                    218: "Libya",
                    220: "Gambia",
                    221: "Senegal",
                    222: "Mauritania",
                    223: "Mali",
                    224: "Guinea",
                    225: "Ivory Coast",
                    226: "Burkina Faso",
                    227: "Niger",
                    228: "Togo",
                    229: "Benin",
                    230: "Mauritius",
                    231: "Liberia",
                    232: "Sierra Leone",
                    233: "Ghana",
                    234: "Nigeria",
                    235: "Chad",
                    236: "Central African Republic",
                    237: "Cameroon",
                    238: "Cape Verde",
                    239: "Sao Tome and Principe",
                    240: "Equatorial Guinea",
                    241: "Gabon",
                    242: "Republic of the Congo",
                    243: "Democratic Republic of the Congo",
                    244: "Angola",
                    245: "Guinea-Bissau",
                    246: "Diego Garcia",
                    247: "Ascension Island",
                    248: "Seychelles",
                    249: "Sudan",
                    250: "Rwanda",
                    251: "Ethiopia",
                    252: "Somalia",
                    253: "Djibouti",
                    254: "Kenya",
                    255: "Tanzania",
                    256: "Uganda",
                    257: "Burundi",
                    258: "Mozambique",
                    260: "Zambia",
                    261: "Madagascar",
                    262: "Reunion/Mayotte",
                    263: "Zimbabwe",
                    264: "Namibia",
                    265: "Malawi",
                    266: "Lesotho",
                    267: "Botswana",
                    268: "Eswatini",
                    269: "Comoros",
                    290: "Saint Helena/Tristan da Cunha",
                    291: "Eritrea",
                    297: "Aruba",
                    298: "Faroe Islands",
                    299: "Greenland",
                    350: "Gibraltar",
                    351: "Portugal",
                    352: "Luxembourg",
                    353: "Ireland",
                    354: "Iceland",
                    355: "Albania",
                    356: "Malta",
                    357: "Cyprus",
                    358: "Finland",
                    359: "Bulgaria",
                    370: "Lithuania",
                    371: "Latvia",
                    372: "Estonia",
                    373: "Moldova",
                    374: "Armenia",
                    375: "Belarus",
                    376: "Andorra",
                    377: "Monaco",
                    378: "San Marino",
                    379: "Vatican City",
                    380: "Ukraine",
                    381: "Serbia",
                    382: "Montenegro",
                    383: "Kosovo",
                    385: "Croatia",
                    386: "Slovenia",
                    387: "Bosnia and Herzegovina",
                    389: "North Macedonia",
                    420: "Czech Republic",
                    421: "Slovakia",
                    423: "Liechtenstein",
                    500: "Falkland Islands",
                    501: "Belize",
                    502: "Guatemala",
                    503: "El Salvador",
                    504: "Honduras",
                    505: "Nicaragua",
                    506: "Costa Rica",
                    507: "Panama",
                    508: "Saint Pierre and Miquelon",
                    509: "Haiti",
                    590: "Guadeloupe",
                    591: "Bolivia",
                    592: "Guyana",
                    593: "Ecuador",
                    594: "French Guiana",
                    595: "Paraguay",
                    596: "Martinique",
                    597: "Suriname",
                    598: "Uruguay",
                    599: "Curacao/Bonaire",
                    670: "East Timor",
                    672: "Norfolk Island",
                    673: "Brunei",
                    674: "Nauru",
                    675: "Papua New Guinea",
                    676: "Tonga",
                    677: "Solomon Islands",
                    678: "Vanuatu",
                    679: "Fiji",
                    680: "Palau",
                    681: "Wallis and Futuna",
                    682: "Cook Islands",
                    683: "Niue",
                    685: "Samoa",
                    686: "Kiribati",
                    687: "New Caledonia",
                    688: "Tuvalu",
                    689: "French Polynesia",
                    690: "Tokelau",
                    691: "Micronesia",
                    692: "Marshall Islands",
                    850: "North Korea",
                    852: "Hong Kong",
                    853: "Macau",
                    855: "Cambodia",
                    856: "Laos",
                    880: "Bangladesh",
                    886: "Taiwan",
                    960: "Maldives",
                    961: "Lebanon",
                    962: "Jordan",
                    963: "Syria",
                    964: "Iraq",
                    965: "Kuwait",
                    966: "Saudi Arabia",
                    967: "Yemen",
                    968: "Oman",
                    970: "Palestine",
                    971: "United Arab Emirates",
                    972: "Israel",
                    973: "Bahrain",
                    974: "Qatar",
                    975: "Bhutan",
                    976: "Mongolia",
                    977: "Nepal",
                    992: "Tajikistan",
                    993: "Turkmenistan",
                    994: "Azerbaijan",
                    995: "Georgia",
                    996: "Kyrgyzstan",
                    998: "Uzbekistan",
                    1204: "Canada", 
                    1242: "Bahamas",  
                    1246: "Barbados",  
                    1264: "Anguilla",  
                    1268: "Antigua and Barbuda",  
                    1284: "British Virgin Islands",  
                    1340: "U.S. Virgin Islands", 
                    1345: "Cayman Islands",  
                    1441: "Bermuda",  
                    1473: "Grenada",  
                    1649: "Turks and Caicos Islands", 
                    1664: "Montserrat",  
                    1670: "Northern Mariana Islands",  
                    1671: "Guam", 
                    1684: "American Samoa",  
                    1721: "Sint Maarten",  
                    1758: "Saint Lucia",  
                    1767: "Dominica",  
                    1784: "Saint Vincent and the Grenadines", 
                    1787: "Puerto Rico",  
                    1809: "Dominican Republic",  
                    1868: "Trinidad and Tobago",  
                    1869: "Saint Kitts and Nevis",  
                    1876: "Jamaica",  
        }
        return country_code_map.get(country_code, "Unknown")

    def __str__(self):
        return f"{self.name} - {self.subject}"
    
    class Meta:
        ordering = ['-created_at']

class Event(models.Model):
    event_name = models.CharField(max_length=100)
    event_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        # Set deleted_at in user's local timezone
        if self.is_deleted and self.deleted_at is None:
            self.deleted_at = timezone.localtime(timezone.now())
        elif not self.is_deleted:
            self.deleted_at = None

        super().save(*args, **kwargs)

    def __str__(self):
        return self.event_name
    
    class Meta:
        ordering = ['-event_date']

    
