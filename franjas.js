const RAW_FRANJAS = [
  {
    "fecha": "2026-06-01",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 113,
    "TELETRABAJO": 99,
    "MITRE - 3": 142
  },
  {
    "fecha": "2026-06-01",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 123,
    "TELETRABAJO": 94,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-01",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 127,
    "TELETRABAJO": 108,
    "MITRE - 3": 154
  },
  {
    "fecha": "2026-06-01",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 127,
    "TELETRABAJO": 106,
    "MITRE - 3": 155
  },
  {
    "fecha": "2026-06-01",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 138,
    "TELETRABAJO": 127,
    "MITRE - 3": 163
  },
  {
    "fecha": "2026-06-01",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 138,
    "TELETRABAJO": 127,
    "MITRE - 3": 163
  },
  {
    "fecha": "2026-06-01",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 135,
    "TELETRABAJO": 125,
    "MITRE - 3": 159
  },
  {
    "fecha": "2026-06-01",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 135,
    "TELETRABAJO": 125,
    "MITRE - 3": 159
  },
  {
    "fecha": "2026-06-01",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 130,
    "TELETRABAJO": 118,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-01",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 127,
    "TELETRABAJO": 118,
    "MITRE - 3": 145
  },
  {
    "fecha": "2026-06-01",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 52,
    "TELETRABAJO": 69,
    "MITRE - 3": 62
  },
  {
    "fecha": "2026-06-01",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 14,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-01",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 52,
    "MITRE - 3": 25,
    "MITRE - 4": 13
  },
  {
    "fecha": "2026-06-01",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 62,
    "MITRE - 3": 33,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-01",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 128,
    "MITRE - 4": 72,
    "MITRE - 3": 86
  },
  {
    "fecha": "2026-06-01",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 133,
    "MITRE - 4": 93,
    "MITRE - 3": 100
  },
  {
    "fecha": "2026-06-01",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 136,
    "MITRE - 4": 109,
    "MITRE - 3": 111
  },
  {
    "fecha": "2026-06-01",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 137,
    "MITRE - 4": 110,
    "MITRE - 3": 112
  },
  {
    "fecha": "2026-06-01",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 137,
    "MITRE - 4": 110,
    "MITRE - 3": 116
  },
  {
    "fecha": "2026-06-01",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 138,
    "MITRE - 4": 110,
    "MITRE - 3": 115
  },
  {
    "fecha": "2026-06-01",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 147,
    "MITRE - 4": 119,
    "MITRE - 3": 134
  },
  {
    "fecha": "2026-06-01",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 142,
    "MITRE - 4": 120,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-01",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 138,
    "MITRE - 4": 122,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-01",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 137,
    "MITRE - 4": 122,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-01",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 114,
    "MITRE - 4": 119,
    "MITRE - 3": 126
  },
  {
    "fecha": "2026-06-01",
    "franja": "14:30 - 15:00",
    "TELETRABAJO": 106,
    "MITRE - 4": 117,
    "MITRE - 3": 122
  },
  {
    "fecha": "2026-06-01",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 124,
    "TELETRABAJO": 108,
    "MITRE - 3": 157
  },
  {
    "fecha": "2026-06-01",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 125,
    "TELETRABAJO": 107,
    "MITRE - 3": 154
  },
  {
    "fecha": "2026-06-01",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 31,
    "TELETRABAJO": 60,
    "MITRE - 3": 49
  },
  {
    "fecha": "2026-06-01",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 22,
    "TELETRABAJO": 44,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-01",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 42,
    "MITRE - 4": 20,
    "MITRE - 3": 33
  },
  {
    "fecha": "2026-06-01",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 40,
    "MITRE - 4": 20,
    "MITRE - 3": 33
  },
  {
    "fecha": "2026-06-01",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 37,
    "MITRE - 4": 18,
    "MITRE - 3": 32
  },
  {
    "fecha": "2026-06-02",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 11,
    "MITRE - 4": 5,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-01",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 0
  },
  {
    "fecha": "2026-06-01",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 9,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-01",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 13,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-02",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 9,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-02",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 9,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-02",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 9,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-02",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-01",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 0
  },
  {
    "fecha": "2026-06-01",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-01",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-01",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-01",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-01",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-01",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-02",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-02",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-02",
    "franja": "03:30 - 04:00",
    "MITRE - 4": 5,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-02",
    "franja": "04:00 - 04:30",
    "MITRE - 4": 5,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-02",
    "franja": "04:30 - 05:00",
    "MITRE - 4": 5,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-02",
    "franja": "05:00 - 05:30",
    "MITRE - 4": 5,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-02",
    "franja": "05:30 - 06:00",
    "MITRE - 4": 5,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-02",
    "franja": "06:00 - 06:30",
    "MITRE - 4": 5,
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-02",
    "franja": "06:30 - 07:00",
    "MITRE - 4": 5,
    "TELETRABAJO": 10
  },
  {
    "fecha": "2026-06-02",
    "franja": "07:00 - 07:30",
    "MITRE - 4": 5,
    "TELETRABAJO": 14
  },
  {
    "fecha": "2026-06-02",
    "franja": "07:30 - 08:00",
    "MITRE - 4": 5,
    "TELETRABAJO": 14,
    "MITRE - 3": 0
  },
  {
    "fecha": "2026-06-02",
    "franja": "08:00 - 08:30",
    "MITRE - 4": 15,
    "TELETRABAJO": 53,
    "MITRE - 3": 30
  },
  {
    "fecha": "2026-06-02",
    "franja": "08:30 - 09:00",
    "MITRE - 4": 22,
    "TELETRABAJO": 62,
    "MITRE - 3": 37
  },
  {
    "fecha": "2026-06-02",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 101,
    "TELETRABAJO": 127,
    "MITRE - 3": 106
  },
  {
    "fecha": "2026-06-02",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 110,
    "TELETRABAJO": 130,
    "MITRE - 3": 113
  },
  {
    "fecha": "2026-06-02",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 111,
    "TELETRABAJO": 131,
    "MITRE - 3": 113
  },
  {
    "fecha": "2026-06-02",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 112,
    "TELETRABAJO": 130,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-02",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 112,
    "TELETRABAJO": 134,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-02",
    "franja": "11:30 - 12:00",
    "MITRE - 4": 112,
    "TELETRABAJO": 134,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-02",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 121,
    "TELETRABAJO": 140,
    "MITRE - 3": 135
  },
  {
    "fecha": "2026-06-02",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 124,
    "TELETRABAJO": 135,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-02",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 121,
    "TELETRABAJO": 131,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-02",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 132,
    "TELETRABAJO": 130,
    "MITRE - 3": 156
  },
  {
    "fecha": "2026-06-02",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 127,
    "TELETRABAJO": 131,
    "MITRE - 3": 154
  },
  {
    "fecha": "2026-06-02",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 128,
    "TELETRABAJO": 131,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-02",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 129,
    "TELETRABAJO": 131,
    "MITRE - 3": 152
  },
  {
    "fecha": "2026-06-02",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 124,
    "TELETRABAJO": 123,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-02",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 122,
    "TELETRABAJO": 123,
    "MITRE - 3": 138
  },
  {
    "fecha": "2026-06-02",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 51,
    "TELETRABAJO": 72,
    "MITRE - 3": 58
  },
  {
    "fecha": "2026-06-02",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 34,
    "TELETRABAJO": 62,
    "MITRE - 3": 48
  },
  {
    "fecha": "2026-06-02",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 25,
    "TELETRABAJO": 42,
    "MITRE - 3": 32
  },
  {
    "fecha": "2026-06-02",
    "franja": "22:30 - 23:00",
    "MITRE - 4": 20,
    "MITRE - 3": 28,
    "TELETRABAJO": 42
  },
  {
    "fecha": "2026-06-02",
    "franja": "23:00 - 23:30",
    "MITRE - 4": 17,
    "TELETRABAJO": 38,
    "MITRE - 3": 28
  },
  {
    "fecha": "2026-06-02",
    "franja": "23:30 - 00:00",
    "MITRE - 4": 16,
    "TELETRABAJO": 36,
    "MITRE - 3": 28
  },
  {
    "fecha": "2026-06-03",
    "franja": "00:00 - 00:30",
    "MITRE - 4": 3,
    "TELETRABAJO": 10,
    "MITRE - 3": 2
  },
  {
    "fecha": "2026-06-02",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 130,
    "MITRE - 4": 124,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-02",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 106,
    "MITRE - 4": 123,
    "MITRE - 3": 125
  },
  {
    "fecha": "2026-06-02",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 123,
    "TELETRABAJO": 98,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-02",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 115,
    "TELETRABAJO": 102,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-02",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 127,
    "TELETRABAJO": 114,
    "MITRE - 3": 155
  },
  {
    "fecha": "2026-06-02",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 128,
    "TELETRABAJO": 114,
    "MITRE - 3": 156
  },
  {
    "fecha": "2026-06-02",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 128,
    "TELETRABAJO": 112,
    "MITRE - 3": 154
  },
  {
    "fecha": "2026-06-02",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 128,
    "TELETRABAJO": 111,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-02",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 120,
    "MITRE - 3": 145,
    "TELETRABAJO": 98
  },
  {
    "fecha": "2026-06-03",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 56,
    "MITRE - 3": 35,
    "MITRE - 4": 14
  },
  {
    "fecha": "2026-06-03",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 66,
    "MITRE - 4": 22,
    "MITRE - 3": 42
  },
  {
    "fecha": "2026-06-03",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 137,
    "MITRE - 4": 98,
    "MITRE - 3": 109
  },
  {
    "fecha": "2026-06-03",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 140,
    "MITRE - 4": 107,
    "MITRE - 3": 115
  },
  {
    "fecha": "2026-06-03",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 141,
    "MITRE - 4": 108,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-03",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 141,
    "MITRE - 4": 108,
    "MITRE - 3": 118
  },
  {
    "fecha": "2026-06-03",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 143,
    "MITRE - 4": 109,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-03",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 143,
    "MITRE - 4": 109,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-03",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 146,
    "MITRE - 4": 117,
    "MITRE - 3": 141
  },
  {
    "fecha": "2026-06-03",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 144,
    "MITRE - 4": 118,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-03",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 140,
    "MITRE - 4": 121,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-03",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 139,
    "MITRE - 4": 121,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-03",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 113,
    "MITRE - 4": 119,
    "MITRE - 3": 130
  },
  {
    "fecha": "2026-06-03",
    "franja": "16:00 - 16:30",
    "TELETRABAJO": 112,
    "MITRE - 4": 129,
    "MITRE - 3": 158
  },
  {
    "fecha": "2026-06-03",
    "franja": "19:00 - 19:30",
    "TELETRABAJO": 118,
    "MITRE - 4": 134,
    "MITRE - 3": 164
  },
  {
    "fecha": "2026-06-03",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 119,
    "TELETRABAJO": 105,
    "MITRE - 3": 126
  },
  {
    "fecha": "2026-06-03",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 113,
    "TELETRABAJO": 98,
    "MITRE - 3": 140
  },
  {
    "fecha": "2026-06-03",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 130,
    "TELETRABAJO": 112,
    "MITRE - 3": 160
  },
  {
    "fecha": "2026-06-03",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 130,
    "TELETRABAJO": 106,
    "MITRE - 3": 157
  },
  {
    "fecha": "2026-06-03",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 132,
    "TELETRABAJO": 105,
    "MITRE - 3": 157
  },
  {
    "fecha": "2026-06-03",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 137,
    "TELETRABAJO": 119,
    "MITRE - 3": 167
  },
  {
    "fecha": "2026-06-03",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 137,
    "TELETRABAJO": 119,
    "MITRE - 3": 164
  },
  {
    "fecha": "2026-06-03",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 136,
    "TELETRABAJO": 115,
    "MITRE - 3": 164
  },
  {
    "fecha": "2026-06-03",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 131,
    "TELETRABAJO": 109,
    "MITRE - 3": 151
  },
  {
    "fecha": "2026-06-03",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 128,
    "TELETRABAJO": 109,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-03",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 59,
    "TELETRABAJO": 67,
    "MITRE - 3": 78
  },
  {
    "fecha": "2026-06-03",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 38,
    "TELETRABAJO": 56,
    "MITRE - 3": 65
  },
  {
    "fecha": "2026-06-03",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 29,
    "TELETRABAJO": 37,
    "MITRE - 3": 41
  },
  {
    "fecha": "2026-06-03",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 120,
    "TELETRABAJO": 96,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-03",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 18,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-03",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 35,
    "MITRE - 4": 27,
    "MITRE - 3": 40
  },
  {
    "fecha": "2026-06-03",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 33,
    "MITRE - 4": 26,
    "MITRE - 3": 39
  },
  {
    "fecha": "2026-06-03",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 32,
    "MITRE - 4": 24,
    "MITRE - 3": 38
  },
  {
    "fecha": "2026-06-04",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 8,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 7,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 11,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 16,
    "MITRE - 3": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-03",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-04",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 6,
    "MITRE - 3": 1,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-03",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-03",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-04",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 110,
    "TELETRABAJO": 134,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-04",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 110,
    "TELETRABAJO": 138,
    "MITRE - 3": 115
  },
  {
    "fecha": "2026-06-04",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 109,
    "TELETRABAJO": 139,
    "MITRE - 3": 116
  },
  {
    "fecha": "2026-06-04",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 110,
    "TELETRABAJO": 140,
    "MITRE - 3": 118
  },
  {
    "fecha": "2026-06-04",
    "franja": "11:30 - 12:00",
    "MITRE - 4": 110,
    "TELETRABAJO": 140,
    "MITRE - 3": 118
  },
  {
    "fecha": "2026-06-04",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 117,
    "TELETRABAJO": 141,
    "MITRE - 3": 133
  },
  {
    "fecha": "2026-06-04",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 137,
    "MITRE - 3": 134
  },
  {
    "fecha": "2026-06-04",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 120,
    "TELETRABAJO": 136,
    "MITRE - 3": 136
  },
  {
    "fecha": "2026-06-04",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 121,
    "TELETRABAJO": 136,
    "MITRE - 3": 135
  },
  {
    "fecha": "2026-06-04",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 119,
    "TELETRABAJO": 114,
    "MITRE - 3": 124
  },
  {
    "fecha": "2026-06-04",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 105,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-04",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 108,
    "TELETRABAJO": 102,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-04",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 55,
    "MITRE - 3": 31,
    "MITRE - 4": 18
  },
  {
    "fecha": "2026-06-04",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 64,
    "MITRE - 4": 26,
    "MITRE - 3": 38
  },
  {
    "fecha": "2026-06-04",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 131,
    "MITRE - 4": 101,
    "MITRE - 3": 108
  },
  {
    "fecha": "2026-06-04",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 115,
    "MITRE - 3": 142,
    "TELETRABAJO": 97
  },
  {
    "fecha": "2026-06-04",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 117,
    "TELETRABAJO": 107,
    "MITRE - 3": 151
  },
  {
    "fecha": "2026-06-04",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 107,
    "MITRE - 3": 152
  },
  {
    "fecha": "2026-06-04",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 116,
    "TELETRABAJO": 107,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-04",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 115,
    "TELETRABAJO": 109,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-04",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 118,
    "TELETRABAJO": 117,
    "MITRE - 3": 156
  },
  {
    "fecha": "2026-06-04",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 117,
    "TELETRABAJO": 119,
    "MITRE - 3": 155
  },
  {
    "fecha": "2026-06-04",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 114,
    "TELETRABAJO": 119,
    "MITRE - 3": 152
  },
  {
    "fecha": "2026-06-04",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 116,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-04",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 111,
    "TELETRABAJO": 110,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-04",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 109,
    "TELETRABAJO": 110,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-04",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 44,
    "TELETRABAJO": 64,
    "MITRE - 3": 64
  },
  {
    "fecha": "2026-06-04",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 26,
    "TELETRABAJO": 59,
    "MITRE - 3": 51
  },
  {
    "fecha": "2026-06-04",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 19,
    "TELETRABAJO": 40,
    "MITRE - 3": 36
  },
  {
    "fecha": "2026-06-04",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 1,
    "TELETRABAJO": 16,
    "MITRE - 4": 6
  },
  {
    "fecha": "2026-06-04",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 37,
    "MITRE - 4": 17,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-04",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 32,
    "MITRE - 4": 15,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-04",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 32,
    "MITRE - 4": 15,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-05",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 2,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-04",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 11,
    "MITRE - 4": 6
  },
  {
    "fecha": "2026-06-04",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 14,
    "MITRE - 3": 1,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-05",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 4,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-04",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 2,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-04",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-05",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 98,
    "TELETRABAJO": 123,
    "MITRE - 3": 112
  },
  {
    "fecha": "2026-06-05",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 104,
    "TELETRABAJO": 126,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-05",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 106,
    "TELETRABAJO": 131,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-05",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 107,
    "TELETRABAJO": 131,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-05",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 107,
    "TELETRABAJO": 133,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-05",
    "franja": "11:30 - 12:00",
    "MITRE - 4": 107,
    "TELETRABAJO": 132,
    "MITRE - 3": 118
  },
  {
    "fecha": "2026-06-05",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 111,
    "TELETRABAJO": 139,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-05",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 113,
    "TELETRABAJO": 137,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-05",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 115,
    "TELETRABAJO": 134,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-05",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 134,
    "MITRE - 3": 140
  },
  {
    "fecha": "2026-06-05",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 112,
    "TELETRABAJO": 113,
    "MITRE - 3": 125
  },
  {
    "fecha": "2026-06-05",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 111,
    "TELETRABAJO": 105,
    "MITRE - 3": 125
  },
  {
    "fecha": "2026-06-05",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 107,
    "TELETRABAJO": 106,
    "MITRE - 3": 138
  },
  {
    "fecha": "2026-06-05",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 14,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 53,
    "MITRE - 3": 33,
    "MITRE - 4": 12
  },
  {
    "fecha": "2026-06-05",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 61,
    "MITRE - 4": 19,
    "MITRE - 3": 41
  },
  {
    "fecha": "2026-06-05",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 118,
    "TELETRABAJO": 114,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-05",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 114,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-05",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 118,
    "TELETRABAJO": 109,
    "MITRE - 3": 146
  },
  {
    "fecha": "2026-06-05",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 117,
    "TELETRABAJO": 107,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-05",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 120,
    "TELETRABAJO": 116,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-05",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 115,
    "MITRE - 3": 151
  },
  {
    "fecha": "2026-06-05",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 115,
    "TELETRABAJO": 112,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-05",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 111,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-05",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 110,
    "TELETRABAJO": 110,
    "MITRE - 3": 138
  },
  {
    "fecha": "2026-06-05",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 109,
    "TELETRABAJO": 108,
    "MITRE - 3": 135
  },
  {
    "fecha": "2026-06-05",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 43,
    "TELETRABAJO": 60,
    "MITRE - 3": 58
  },
  {
    "fecha": "2026-06-05",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 23,
    "TELETRABAJO": 50,
    "MITRE - 3": 48
  },
  {
    "fecha": "2026-06-05",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 15,
    "TELETRABAJO": 35,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-05",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 115,
    "MITRE - 3": 139,
    "TELETRABAJO": 101
  },
  {
    "fecha": "2026-06-06",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 59,
    "TELETRABAJO": 32,
    "MITRE - 3": 56
  },
  {
    "fecha": "2026-06-06",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 64,
    "TELETRABAJO": 31,
    "MITRE - 3": 55
  },
  {
    "fecha": "2026-06-06",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 66,
    "TELETRABAJO": 34,
    "MITRE - 3": 65
  },
  {
    "fecha": "2026-06-06",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 66,
    "TELETRABAJO": 34,
    "MITRE - 3": 66
  },
  {
    "fecha": "2026-06-06",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 67,
    "TELETRABAJO": 33,
    "MITRE - 3": 63
  },
  {
    "fecha": "2026-06-06",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 67,
    "TELETRABAJO": 33,
    "MITRE - 3": 63
  },
  {
    "fecha": "2026-06-06",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 73,
    "TELETRABAJO": 42,
    "MITRE - 3": 71
  },
  {
    "fecha": "2026-06-06",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 73,
    "TELETRABAJO": 43,
    "MITRE - 3": 71
  },
  {
    "fecha": "2026-06-06",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 74,
    "TELETRABAJO": 44,
    "MITRE - 3": 69
  },
  {
    "fecha": "2026-06-06",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 75,
    "TELETRABAJO": 44,
    "MITRE - 3": 69
  },
  {
    "fecha": "2026-06-06",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 76,
    "TELETRABAJO": 45,
    "MITRE - 3": 64
  },
  {
    "fecha": "2026-06-06",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 76,
    "TELETRABAJO": 44,
    "MITRE - 3": 64
  },
  {
    "fecha": "2026-06-06",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 32,
    "TELETRABAJO": 27,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-06",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 46,
    "MITRE - 4": 58,
    "MITRE - 3": 38
  },
  {
    "fecha": "2026-06-06",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 48,
    "MITRE - 4": 63,
    "MITRE - 3": 41
  },
  {
    "fecha": "2026-06-06",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 49,
    "MITRE - 4": 64,
    "MITRE - 3": 42
  },
  {
    "fecha": "2026-06-06",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 50,
    "MITRE - 4": 64,
    "MITRE - 3": 43
  },
  {
    "fecha": "2026-06-06",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 49,
    "MITRE - 4": 63,
    "MITRE - 3": 45
  },
  {
    "fecha": "2026-06-06",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 49,
    "MITRE - 4": 63,
    "MITRE - 3": 45
  },
  {
    "fecha": "2026-06-06",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 49,
    "MITRE - 4": 65,
    "MITRE - 3": 51
  },
  {
    "fecha": "2026-06-06",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 49,
    "MITRE - 4": 64,
    "MITRE - 3": 52
  },
  {
    "fecha": "2026-06-06",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 49,
    "MITRE - 4": 64,
    "MITRE - 3": 52
  },
  {
    "fecha": "2026-06-06",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 49,
    "MITRE - 4": 64,
    "MITRE - 3": 52
  },
  {
    "fecha": "2026-06-06",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 41,
    "MITRE - 4": 64,
    "MITRE - 3": 47
  },
  {
    "fecha": "2026-06-06",
    "franja": "14:30 - 15:00",
    "TELETRABAJO": 39,
    "MITRE - 4": 62,
    "MITRE - 3": 48
  },
  {
    "fecha": "2026-06-06",
    "franja": "08:30 - 09:00",
    "MITRE - 4": 10,
    "TELETRABAJO": 18,
    "MITRE - 3": 8
  },
  {
    "fecha": "2026-06-07",
    "franja": "08:30 - 09:00",
    "MITRE - 4": 4,
    "TELETRABAJO": 10,
    "MITRE - 3": 11
  },
  {
    "fecha": "2026-06-07",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 37,
    "TELETRABAJO": 27,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-07",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 39,
    "TELETRABAJO": 29,
    "MITRE - 3": 36
  },
  {
    "fecha": "2026-06-07",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 42,
    "TELETRABAJO": 30,
    "MITRE - 3": 38
  },
  {
    "fecha": "2026-06-07",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 42,
    "TELETRABAJO": 31,
    "MITRE - 3": 38
  },
  {
    "fecha": "2026-06-07",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 42,
    "TELETRABAJO": 30,
    "MITRE - 3": 39
  },
  {
    "fecha": "2026-06-07",
    "franja": "11:30 - 12:00",
    "MITRE - 4": 42,
    "TELETRABAJO": 31,
    "MITRE - 3": 39
  },
  {
    "fecha": "2026-06-07",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 43,
    "TELETRABAJO": 28,
    "MITRE - 3": 47
  },
  {
    "fecha": "2026-06-07",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 43,
    "TELETRABAJO": 28,
    "MITRE - 3": 46
  },
  {
    "fecha": "2026-06-07",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 43,
    "TELETRABAJO": 27,
    "MITRE - 3": 47
  },
  {
    "fecha": "2026-06-07",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 43,
    "TELETRABAJO": 27,
    "MITRE - 3": 47
  },
  {
    "fecha": "2026-06-07",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 42,
    "TELETRABAJO": 25,
    "MITRE - 3": 43
  },
  {
    "fecha": "2026-06-07",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 44,
    "TELETRABAJO": 24,
    "MITRE - 3": 42
  },
  {
    "fecha": "2026-06-07",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 53,
    "TELETRABAJO": 24,
    "MITRE - 3": 42
  },
  {
    "fecha": "2026-06-07",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 54,
    "TELETRABAJO": 21,
    "MITRE - 3": 43
  },
  {
    "fecha": "2026-06-07",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 56,
    "MITRE - 3": 51,
    "TELETRABAJO": 22
  },
  {
    "fecha": "2026-06-07",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 58,
    "MITRE - 3": 52,
    "TELETRABAJO": 22
  },
  {
    "fecha": "2026-06-07",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 58,
    "MITRE - 3": 52,
    "TELETRABAJO": 24
  },
  {
    "fecha": "2026-06-07",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 58,
    "MITRE - 3": 53,
    "TELETRABAJO": 24
  },
  {
    "fecha": "2026-06-07",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 65,
    "MITRE - 3": 55,
    "TELETRABAJO": 32
  },
  {
    "fecha": "2026-06-07",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 64,
    "MITRE - 3": 55,
    "TELETRABAJO": 32
  },
  {
    "fecha": "2026-06-07",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 65,
    "MITRE - 3": 54,
    "TELETRABAJO": 33
  },
  {
    "fecha": "2026-06-07",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 66,
    "MITRE - 3": 54,
    "TELETRABAJO": 33
  },
  {
    "fecha": "2026-06-07",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 66,
    "MITRE - 3": 48,
    "TELETRABAJO": 32
  },
  {
    "fecha": "2026-06-07",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 66,
    "MITRE - 3": 48,
    "TELETRABAJO": 33
  },
  {
    "fecha": "2026-06-07",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 35,
    "MITRE - 3": 31,
    "TELETRABAJO": 21
  },
  {
    "fecha": "2026-06-06",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 30,
    "TELETRABAJO": 23,
    "MITRE - 4": 21
  },
  {
    "fecha": "2026-06-06",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 20,
    "TELETRABAJO": 18,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-06",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1,
    "MITRE - 3": 0
  },
  {
    "fecha": "2026-06-06",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 16,
    "MITRE - 4": 8,
    "MITRE - 3": 8
  },
  {
    "fecha": "2026-06-07",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 28,
    "TELETRABAJO": 18,
    "MITRE - 4": 26
  },
  {
    "fecha": "2026-06-07",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 19,
    "TELETRABAJO": 17,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-07",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 3,
    "MITRE - 3": 0,
    "MITRE - 4": 0
  },
  {
    "fecha": "2026-06-07",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 10,
    "MITRE - 3": 9,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-05",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 34,
    "MITRE - 4": 15,
    "MITRE - 3": 32
  },
  {
    "fecha": "2026-06-05",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 33,
    "MITRE - 4": 14,
    "MITRE - 3": 31
  },
  {
    "fecha": "2026-06-05",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 32,
    "MITRE - 4": 14,
    "MITRE - 3": 31
  },
  {
    "fecha": "2026-06-06",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 9,
    "MITRE - 4": 1,
    "MITRE - 3": 5
  },
  {
    "fecha": "2026-06-06",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 17,
    "MITRE - 4": 17,
    "MITRE - 3": 20
  },
  {
    "fecha": "2026-06-06",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 17,
    "MITRE - 4": 16,
    "MITRE - 3": 20
  },
  {
    "fecha": "2026-06-06",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 17,
    "MITRE - 4": 16,
    "MITRE - 3": 20
  },
  {
    "fecha": "2026-06-07",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 7,
    "MITRE - 4": 0,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-07",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 17,
    "MITRE - 4": 17,
    "MITRE - 3": 19
  },
  {
    "fecha": "2026-06-07",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 16,
    "MITRE - 4": 16,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-07",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 15,
    "MITRE - 4": 15,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-08",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 1,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-05",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-05",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 13,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-06",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-06",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-07",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-07",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-06",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 4,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "00:30 - 01:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-07",
    "franja": "01:00 - 01:30",
    "MITRE - 3": 2,
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-07",
    "franja": "01:30 - 02:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-07",
    "franja": "02:00 - 02:30",
    "MITRE - 3": 0,
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "00:30 - 01:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-08",
    "franja": "01:00 - 01:30",
    "MITRE - 3": 2,
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "01:30 - 02:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "02:00 - 02:30",
    "MITRE - 3": 0,
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-05",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-05",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-06",
    "franja": "03:30 - 04:00",
    "MITRE - 4": 1,
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-06",
    "franja": "04:00 - 04:30",
    "MITRE - 4": 1,
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-06",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-06",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-06",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-07",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-07",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-07",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-08",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 48,
    "MITRE - 3": 27,
    "MITRE - 4": 12
  },
  {
    "fecha": "2026-06-08",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 58,
    "MITRE - 3": 36,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-08",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 126,
    "MITRE - 4": 88,
    "MITRE - 3": 107
  },
  {
    "fecha": "2026-06-08",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 133,
    "MITRE - 4": 104,
    "MITRE - 3": 115
  },
  {
    "fecha": "2026-06-08",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 134,
    "MITRE - 4": 108,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-08",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 134,
    "MITRE - 4": 106,
    "MITRE - 3": 114
  },
  {
    "fecha": "2026-06-08",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 14,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-08",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 117,
    "TELETRABAJO": 111,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-08",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 119,
    "TELETRABAJO": 111,
    "MITRE - 3": 150
  },
  {
    "fecha": "2026-06-08",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 119,
    "TELETRABAJO": 109,
    "MITRE - 3": 148
  },
  {
    "fecha": "2026-06-08",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 120,
    "TELETRABAJO": 106,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-08",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 127,
    "TELETRABAJO": 123,
    "MITRE - 3": 156
  },
  {
    "fecha": "2026-06-08",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 125,
    "MITRE - 3": 155
  },
  {
    "fecha": "2026-06-08",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 119,
    "TELETRABAJO": 124,
    "MITRE - 3": 154
  },
  {
    "fecha": "2026-06-08",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 121,
    "TELETRABAJO": 125,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-08",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 117,
    "TELETRABAJO": 119,
    "MITRE - 3": 140
  },
  {
    "fecha": "2026-06-08",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 115,
    "TELETRABAJO": 119,
    "MITRE - 3": 140
  },
  {
    "fecha": "2026-06-08",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 44,
    "TELETRABAJO": 69,
    "MITRE - 3": 66
  },
  {
    "fecha": "2026-06-08",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 27,
    "TELETRABAJO": 60,
    "MITRE - 3": 54
  },
  {
    "fecha": "2026-06-08",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 21,
    "TELETRABAJO": 41,
    "MITRE - 3": 33
  },
  {
    "fecha": "2026-06-08",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 117,
    "MITRE - 3": 125,
    "TELETRABAJO": 118
  },
  {
    "fecha": "2026-06-08",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 116,
    "MITRE - 3": 121,
    "TELETRABAJO": 108
  },
  {
    "fecha": "2026-06-08",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 108,
    "MITRE - 3": 133,
    "TELETRABAJO": 108
  },
  {
    "fecha": "2026-06-08",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 114,
    "TELETRABAJO": 102,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-08",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 133,
    "MITRE - 4": 105,
    "MITRE - 3": 119
  },
  {
    "fecha": "2026-06-08",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 133,
    "MITRE - 4": 106,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-08",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 138,
    "MITRE - 4": 112,
    "MITRE - 3": 137
  },
  {
    "fecha": "2026-06-08",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 114,
    "MITRE - 3": 136,
    "TELETRABAJO": 136
  },
  {
    "fecha": "2026-06-08",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 115,
    "MITRE - 3": 137,
    "TELETRABAJO": 132
  },
  {
    "fecha": "2026-06-08",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 118,
    "MITRE - 3": 138,
    "TELETRABAJO": 134
  },
  {
    "fecha": "2026-06-08",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 38,
    "MITRE - 4": 21,
    "MITRE - 3": 32
  },
  {
    "fecha": "2026-06-08",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 34,
    "MITRE - 4": 19,
    "MITRE - 3": 31
  },
  {
    "fecha": "2026-06-08",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 33,
    "MITRE - 4": 16,
    "MITRE - 3": 30
  },
  {
    "fecha": "2026-06-09",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 10,
    "MITRE - 4": 1,
    "MITRE - 3": 2
  },
  {
    "fecha": "2026-06-08",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-08",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 9,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-08",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 13,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-08",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-08",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-09",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 139,
    "MITRE - 4": 103,
    "MITRE - 3": 112
  },
  {
    "fecha": "2026-06-09",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 121,
    "MITRE - 3": 147,
    "TELETRABAJO": 114
  },
  {
    "fecha": "2026-06-09",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 122,
    "TELETRABAJO": 114,
    "MITRE - 3": 148
  },
  {
    "fecha": "2026-06-09",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 120,
    "TELETRABAJO": 110,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-09",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 119,
    "TELETRABAJO": 107,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-09",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 124,
    "TELETRABAJO": 127,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-09",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 120,
    "TELETRABAJO": 129,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-09",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 118,
    "TELETRABAJO": 130,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-09",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 123,
    "TELETRABAJO": 130,
    "MITRE - 3": 146
  },
  {
    "fecha": "2026-06-09",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 119,
    "TELETRABAJO": 127,
    "MITRE - 3": 132
  },
  {
    "fecha": "2026-06-09",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 115,
    "TELETRABAJO": 126,
    "MITRE - 3": 130
  },
  {
    "fecha": "2026-06-09",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 47,
    "TELETRABAJO": 79,
    "MITRE - 3": 59
  },
  {
    "fecha": "2026-06-09",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 30,
    "TELETRABAJO": 67,
    "MITRE - 3": 50
  },
  {
    "fecha": "2026-06-09",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 20,
    "TELETRABAJO": 42,
    "MITRE - 3": 32
  },
  {
    "fecha": "2026-06-09",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 114,
    "MITRE - 3": 120,
    "TELETRABAJO": 116
  },
  {
    "fecha": "2026-06-09",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 115,
    "MITRE - 3": 116,
    "TELETRABAJO": 107
  },
  {
    "fecha": "2026-06-09",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 106,
    "MITRE - 3": 130,
    "TELETRABAJO": 101
  },
  {
    "fecha": "2026-06-09",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 114,
    "MITRE - 3": 138,
    "TELETRABAJO": 98
  },
  {
    "fecha": "2026-06-09",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 41,
    "MITRE - 4": 18,
    "MITRE - 3": 29
  },
  {
    "fecha": "2026-06-09",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 35,
    "MITRE - 4": 17,
    "MITRE - 3": 25
  },
  {
    "fecha": "2026-06-09",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 111,
    "MITRE - 3": 125,
    "TELETRABAJO": 144
  },
  {
    "fecha": "2026-06-09",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 114,
    "MITRE - 3": 128,
    "TELETRABAJO": 142
  },
  {
    "fecha": "2026-06-09",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 115,
    "MITRE - 3": 129,
    "TELETRABAJO": 139
  },
  {
    "fecha": "2026-06-09",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 116,
    "MITRE - 3": 129,
    "TELETRABAJO": 138
  },
  {
    "fecha": "2026-06-09",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 93,
    "MITRE - 3": 105,
    "TELETRABAJO": 132
  },
  {
    "fecha": "2026-06-09",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 102,
    "MITRE - 3": 112,
    "TELETRABAJO": 134
  },
  {
    "fecha": "2026-06-09",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 103,
    "MITRE - 3": 112,
    "TELETRABAJO": 137
  },
  {
    "fecha": "2026-06-09",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 103,
    "MITRE - 3": 112,
    "TELETRABAJO": 138
  },
  {
    "fecha": "2026-06-09",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 103,
    "MITRE - 3": 112,
    "TELETRABAJO": 138
  },
  {
    "fecha": "2026-06-09",
    "franja": "08:00 - 08:30",
    "MITRE - 3": 31,
    "TELETRABAJO": 57,
    "MITRE - 4": 14
  },
  {
    "fecha": "2026-06-09",
    "franja": "08:30 - 09:00",
    "MITRE - 3": 39,
    "TELETRABAJO": 67,
    "MITRE - 4": 20
  },
  {
    "fecha": "2026-06-09",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 16,
    "MITRE - 3": 0,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-09",
    "franja": "23:30 - 00:00",
    "MITRE - 4": 17,
    "TELETRABAJO": 32,
    "MITRE - 3": 25
  },
  {
    "fecha": "2026-06-10",
    "franja": "00:00 - 00:30",
    "MITRE - 4": 1,
    "TELETRABAJO": 9,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 11,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-09",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 16,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-10",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-09",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 100,
    "MITRE - 3": 110,
    "TELETRABAJO": 131
  },
  {
    "fecha": "2026-06-10",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 110,
    "MITRE - 3": 116,
    "TELETRABAJO": 136
  },
  {
    "fecha": "2026-06-10",
    "franja": "17:30 - 18:00",
    "TELETRABAJO": 108,
    "MITRE - 3": 153,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-10",
    "franja": "18:00 - 18:30",
    "TELETRABAJO": 120,
    "MITRE - 3": 159,
    "MITRE - 4": 129
  },
  {
    "fecha": "2026-06-10",
    "franja": "18:30 - 19:00",
    "TELETRABAJO": 119,
    "MITRE - 3": 157,
    "MITRE - 4": 125
  },
  {
    "fecha": "2026-06-10",
    "franja": "19:00 - 19:30",
    "TELETRABAJO": 117,
    "MITRE - 3": 158,
    "MITRE - 4": 123
  },
  {
    "fecha": "2026-06-10",
    "franja": "19:30 - 20:00",
    "TELETRABAJO": 119,
    "MITRE - 3": 158,
    "MITRE - 4": 127
  },
  {
    "fecha": "2026-06-10",
    "franja": "20:00 - 20:30",
    "TELETRABAJO": 112,
    "MITRE - 3": 147,
    "MITRE - 4": 123
  },
  {
    "fecha": "2026-06-10",
    "franja": "20:30 - 21:00",
    "TELETRABAJO": 112,
    "MITRE - 3": 146,
    "MITRE - 4": 119
  },
  {
    "fecha": "2026-06-10",
    "franja": "21:00 - 21:30",
    "TELETRABAJO": 73,
    "MITRE - 3": 73,
    "MITRE - 4": 55
  },
  {
    "fecha": "2026-06-10",
    "franja": "21:30 - 22:00",
    "TELETRABAJO": 62,
    "MITRE - 3": 55,
    "MITRE - 4": 37
  },
  {
    "fecha": "2026-06-10",
    "franja": "08:30 - 09:00",
    "MITRE - 4": 25,
    "MITRE - 3": 39,
    "TELETRABAJO": 70
  },
  {
    "fecha": "2026-06-10",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 108,
    "MITRE - 3": 118,
    "TELETRABAJO": 139
  },
  {
    "fecha": "2026-06-10",
    "franja": "15:30 - 16:00",
    "MITRE - 3": 137,
    "TELETRABAJO": 97,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-10",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 151,
    "TELETRABAJO": 109,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-10",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 155,
    "TELETRABAJO": 110,
    "MITRE - 4": 114
  },
  {
    "fecha": "2026-06-10",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 152,
    "TELETRABAJO": 108,
    "MITRE - 4": 115
  },
  {
    "fecha": "2026-06-10",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 38,
    "TELETRABAJO": 40,
    "MITRE - 4": 31
  },
  {
    "fecha": "2026-06-10",
    "franja": "08:00 - 08:30",
    "MITRE - 3": 31,
    "TELETRABAJO": 60,
    "MITRE - 4": 18
  },
  {
    "fecha": "2026-06-10",
    "franja": "10:30 - 11:00",
    "MITRE - 3": 121,
    "TELETRABAJO": 140,
    "MITRE - 4": 108
  },
  {
    "fecha": "2026-06-10",
    "franja": "11:00 - 11:30",
    "MITRE - 3": 122,
    "TELETRABAJO": 143,
    "MITRE - 4": 107
  },
  {
    "fecha": "2026-06-10",
    "franja": "11:30 - 12:00",
    "MITRE - 3": 121,
    "TELETRABAJO": 142,
    "MITRE - 4": 107
  },
  {
    "fecha": "2026-06-10",
    "franja": "12:00 - 12:30",
    "MITRE - 3": 136,
    "TELETRABAJO": 145,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-10",
    "franja": "12:30 - 13:00",
    "MITRE - 3": 136,
    "TELETRABAJO": 142,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-10",
    "franja": "13:00 - 13:30",
    "MITRE - 3": 138,
    "TELETRABAJO": 136,
    "MITRE - 4": 114
  },
  {
    "fecha": "2026-06-10",
    "franja": "13:30 - 14:00",
    "MITRE - 3": 137,
    "TELETRABAJO": 136,
    "MITRE - 4": 114
  },
  {
    "fecha": "2026-06-10",
    "franja": "14:00 - 14:30",
    "MITRE - 3": 124,
    "TELETRABAJO": 115,
    "MITRE - 4": 111
  },
  {
    "fecha": "2026-06-10",
    "franja": "14:30 - 15:00",
    "MITRE - 3": 121,
    "TELETRABAJO": 104,
    "MITRE - 4": 110
  },
  {
    "fecha": "2026-06-10",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 133,
    "TELETRABAJO": 98,
    "MITRE - 4": 103
  },
  {
    "fecha": "2026-06-10",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 1,
    "TELETRABAJO": 15,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-10",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 38,
    "MITRE - 4": 28,
    "MITRE - 3": 37
  },
  {
    "fecha": "2026-06-10",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 35,
    "MITRE - 4": 25,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-10",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 33,
    "MITRE - 4": 24,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-11",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 9,
    "MITRE - 4": 3,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-10",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 11,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-10",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 14,
    "MITRE - 4": 1,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-11",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-11",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-11",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-11",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 3": 0,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-10",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-10",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-11",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-11",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "08:30 - 09:00",
    "MITRE - 3": 37,
    "TELETRABAJO": 63,
    "MITRE - 4": 22
  },
  {
    "fecha": "2026-06-11",
    "franja": "09:00 - 09:30",
    "MITRE - 3": 107,
    "TELETRABAJO": 126,
    "MITRE - 4": 94
  },
  {
    "fecha": "2026-06-11",
    "franja": "09:30 - 10:00",
    "MITRE - 3": 112,
    "TELETRABAJO": 128,
    "MITRE - 4": 101
  },
  {
    "fecha": "2026-06-11",
    "franja": "10:00 - 10:30",
    "MITRE - 3": 113,
    "TELETRABAJO": 134,
    "MITRE - 4": 102
  },
  {
    "fecha": "2026-06-11",
    "franja": "10:30 - 11:00",
    "MITRE - 3": 113,
    "TELETRABAJO": 136,
    "MITRE - 4": 103
  },
  {
    "fecha": "2026-06-11",
    "franja": "11:00 - 11:30",
    "MITRE - 3": 115,
    "TELETRABAJO": 140,
    "MITRE - 4": 105
  },
  {
    "fecha": "2026-06-11",
    "franja": "11:30 - 12:00",
    "MITRE - 3": 116,
    "TELETRABAJO": 139,
    "MITRE - 4": 105
  },
  {
    "fecha": "2026-06-11",
    "franja": "12:00 - 12:30",
    "MITRE - 3": 128,
    "TELETRABAJO": 142,
    "MITRE - 4": 110
  },
  {
    "fecha": "2026-06-11",
    "franja": "12:30 - 13:00",
    "MITRE - 3": 128,
    "TELETRABAJO": 139,
    "MITRE - 4": 111
  },
  {
    "fecha": "2026-06-11",
    "franja": "13:00 - 13:30",
    "MITRE - 3": 130,
    "TELETRABAJO": 137,
    "MITRE - 4": 113
  },
  {
    "fecha": "2026-06-11",
    "franja": "13:30 - 14:00",
    "MITRE - 3": 130,
    "TELETRABAJO": 136,
    "MITRE - 4": 113
  },
  {
    "fecha": "2026-06-11",
    "franja": "14:00 - 14:30",
    "MITRE - 3": 123,
    "TELETRABAJO": 114,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-11",
    "franja": "14:30 - 15:00",
    "MITRE - 3": 118,
    "TELETRABAJO": 105,
    "MITRE - 4": 113
  },
  {
    "fecha": "2026-06-11",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 134,
    "TELETRABAJO": 108,
    "MITRE - 4": 106
  },
  {
    "fecha": "2026-06-11",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 149,
    "TELETRABAJO": 117,
    "MITRE - 4": 115
  },
  {
    "fecha": "2026-06-11",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 153,
    "TELETRABAJO": 115,
    "MITRE - 4": 117
  },
  {
    "fecha": "2026-06-11",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 151,
    "TELETRABAJO": 111,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-11",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 151,
    "TELETRABAJO": 110,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-11",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 157,
    "TELETRABAJO": 126,
    "MITRE - 4": 122
  },
  {
    "fecha": "2026-06-11",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 158,
    "TELETRABAJO": 125,
    "MITRE - 4": 118
  },
  {
    "fecha": "2026-06-11",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 154,
    "TELETRABAJO": 123,
    "MITRE - 4": 115
  },
  {
    "fecha": "2026-06-11",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 154,
    "TELETRABAJO": 123,
    "MITRE - 4": 120
  },
  {
    "fecha": "2026-06-11",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 146,
    "TELETRABAJO": 115,
    "MITRE - 4": 117
  },
  {
    "fecha": "2026-06-11",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 145,
    "TELETRABAJO": 114,
    "MITRE - 4": 114
  },
  {
    "fecha": "2026-06-11",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 66,
    "TELETRABAJO": 65,
    "MITRE - 4": 46
  },
  {
    "fecha": "2026-06-11",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 53,
    "TELETRABAJO": 55,
    "MITRE - 4": 25
  },
  {
    "fecha": "2026-06-11",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 37,
    "TELETRABAJO": 37,
    "MITRE - 4": 18
  },
  {
    "fecha": "2026-06-11",
    "franja": "08:00 - 08:30",
    "MITRE - 3": 30,
    "TELETRABAJO": 53,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-11",
    "franja": "15:30 - 16:00",
    "MITRE - 3": 137,
    "TELETRABAJO": 106,
    "MITRE - 4": 113
  },
  {
    "fecha": "2026-06-11",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 1,
    "TELETRABAJO": 14,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-11",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 35,
    "MITRE - 4": 16,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-11",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 32,
    "MITRE - 4": 14,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-11",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 30,
    "MITRE - 4": 15,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-12",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 2,
    "MITRE - 3": 4
  },
  {
    "fecha": "2026-06-11",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 10,
    "MITRE - 4": 4
  },
  {
    "fecha": "2026-06-11",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 13,
    "MITRE - 4": 3,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-12",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 6,
    "MITRE - 3": 2,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 6,
    "MITRE - 3": 2,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 3": 0,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-11",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 5,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-12",
    "franja": "09:00 - 09:30",
    "MITRE - 3": 109,
    "TELETRABAJO": 123,
    "MITRE - 4": 96
  },
  {
    "fecha": "2026-06-12",
    "franja": "09:30 - 10:00",
    "MITRE - 3": 113,
    "TELETRABAJO": 125,
    "MITRE - 4": 103
  },
  {
    "fecha": "2026-06-12",
    "franja": "10:00 - 10:30",
    "MITRE - 3": 114,
    "TELETRABAJO": 127,
    "MITRE - 4": 105
  },
  {
    "fecha": "2026-06-12",
    "franja": "10:30 - 11:00",
    "MITRE - 3": 114,
    "TELETRABAJO": 126,
    "MITRE - 4": 106
  },
  {
    "fecha": "2026-06-12",
    "franja": "11:00 - 11:30",
    "MITRE - 3": 115,
    "TELETRABAJO": 128,
    "MITRE - 4": 106
  },
  {
    "fecha": "2026-06-12",
    "franja": "11:30 - 12:00",
    "MITRE - 3": 116,
    "TELETRABAJO": 128,
    "MITRE - 4": 106
  },
  {
    "fecha": "2026-06-12",
    "franja": "12:00 - 12:30",
    "MITRE - 3": 129,
    "TELETRABAJO": 135,
    "MITRE - 4": 109
  },
  {
    "fecha": "2026-06-12",
    "franja": "12:30 - 13:00",
    "MITRE - 3": 131,
    "TELETRABAJO": 134,
    "MITRE - 4": 109
  },
  {
    "fecha": "2026-06-12",
    "franja": "13:00 - 13:30",
    "MITRE - 3": 134,
    "TELETRABAJO": 131,
    "MITRE - 4": 110
  },
  {
    "fecha": "2026-06-12",
    "franja": "13:30 - 14:00",
    "MITRE - 3": 134,
    "TELETRABAJO": 132,
    "MITRE - 4": 110
  },
  {
    "fecha": "2026-06-12",
    "franja": "14:00 - 14:30",
    "MITRE - 3": 120,
    "TELETRABAJO": 103,
    "MITRE - 4": 112
  },
  {
    "fecha": "2026-06-12",
    "franja": "14:30 - 15:00",
    "MITRE - 3": 118,
    "TELETRABAJO": 97,
    "MITRE - 4": 110
  },
  {
    "fecha": "2026-06-12",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 139,
    "TELETRABAJO": 108,
    "MITRE - 4": 104
  },
  {
    "fecha": "2026-06-12",
    "franja": "15:30 - 16:00",
    "MITRE - 3": 138,
    "TELETRABAJO": 106,
    "MITRE - 4": 113
  },
  {
    "fecha": "2026-06-12",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 149,
    "TELETRABAJO": 116,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-12",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 151,
    "TELETRABAJO": 115,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-12",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 149,
    "TELETRABAJO": 113,
    "MITRE - 4": 115
  },
  {
    "fecha": "2026-06-12",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 144,
    "TELETRABAJO": 113,
    "MITRE - 4": 115
  },
  {
    "fecha": "2026-06-12",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 147,
    "TELETRABAJO": 126,
    "MITRE - 4": 122
  },
  {
    "fecha": "2026-06-12",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 146,
    "TELETRABAJO": 123,
    "MITRE - 4": 117
  },
  {
    "fecha": "2026-06-12",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 143,
    "TELETRABAJO": 123,
    "MITRE - 4": 116
  },
  {
    "fecha": "2026-06-12",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 142,
    "TELETRABAJO": 121,
    "MITRE - 4": 121
  },
  {
    "fecha": "2026-06-12",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 128,
    "TELETRABAJO": 114,
    "MITRE - 4": 118
  },
  {
    "fecha": "2026-06-12",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 127,
    "TELETRABAJO": 112,
    "MITRE - 4": 114
  },
  {
    "fecha": "2026-06-12",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 53,
    "TELETRABAJO": 61,
    "MITRE - 4": 40
  },
  {
    "fecha": "2026-06-12",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 42,
    "TELETRABAJO": 53,
    "MITRE - 4": 20
  },
  {
    "fecha": "2026-06-12",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 31,
    "TELETRABAJO": 37,
    "MITRE - 4": 13
  },
  {
    "fecha": "2026-06-12",
    "franja": "08:00 - 08:30",
    "MITRE - 3": 29,
    "TELETRABAJO": 56,
    "MITRE - 4": 13
  },
  {
    "fecha": "2026-06-12",
    "franja": "08:30 - 09:00",
    "MITRE - 3": 36,
    "TELETRABAJO": 65,
    "MITRE - 4": 19
  },
  {
    "fecha": "2026-06-12",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 0,
    "TELETRABAJO": 12,
    "MITRE - 4": 3
  },
  {
    "fecha": "2026-06-13",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 56,
    "TELETRABAJO": 31,
    "MITRE - 4": 65
  },
  {
    "fecha": "2026-06-13",
    "franja": "15:30 - 16:00",
    "MITRE - 3": 56,
    "TELETRABAJO": 29,
    "MITRE - 4": 68
  },
  {
    "fecha": "2026-06-13",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 64,
    "TELETRABAJO": 38,
    "MITRE - 4": 67
  },
  {
    "fecha": "2026-06-13",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 64,
    "TELETRABAJO": 38,
    "MITRE - 4": 68
  },
  {
    "fecha": "2026-06-13",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 64,
    "TELETRABAJO": 36,
    "MITRE - 4": 69
  },
  {
    "fecha": "2026-06-13",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 63,
    "TELETRABAJO": 36,
    "MITRE - 4": 69
  },
  {
    "fecha": "2026-06-13",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 71,
    "TELETRABAJO": 45,
    "MITRE - 4": 77
  },
  {
    "fecha": "2026-06-13",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 70,
    "TELETRABAJO": 44,
    "MITRE - 4": 74
  },
  {
    "fecha": "2026-06-13",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 68,
    "TELETRABAJO": 44,
    "MITRE - 4": 75
  },
  {
    "fecha": "2026-06-13",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 67,
    "TELETRABAJO": 44,
    "MITRE - 4": 77
  },
  {
    "fecha": "2026-06-13",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 63,
    "TELETRABAJO": 45,
    "MITRE - 4": 77
  },
  {
    "fecha": "2026-06-13",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 63,
    "TELETRABAJO": 46,
    "MITRE - 4": 77
  },
  {
    "fecha": "2026-06-13",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 35,
    "TELETRABAJO": 33,
    "MITRE - 4": 36
  },
  {
    "fecha": "2026-06-13",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 31,
    "TELETRABAJO": 29,
    "MITRE - 4": 28
  },
  {
    "fecha": "2026-06-13",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 20,
    "TELETRABAJO": 21,
    "MITRE - 4": 23
  },
  {
    "fecha": "2026-06-13",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 0,
    "MITRE - 3": 2
  },
  {
    "fecha": "2026-06-13",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 18,
    "MITRE - 3": 11,
    "MITRE - 4": 7
  },
  {
    "fecha": "2026-06-13",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 20,
    "MITRE - 3": 13,
    "MITRE - 4": 8
  },
  {
    "fecha": "2026-06-13",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 37,
    "MITRE - 3": 42,
    "MITRE - 4": 64
  },
  {
    "fecha": "2026-06-13",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 38,
    "MITRE - 3": 43,
    "MITRE - 4": 68
  },
  {
    "fecha": "2026-06-13",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 38,
    "MITRE - 3": 46,
    "MITRE - 4": 70
  },
  {
    "fecha": "2026-06-13",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 37,
    "MITRE - 3": 46,
    "MITRE - 4": 70
  },
  {
    "fecha": "2026-06-13",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 37,
    "MITRE - 3": 46,
    "MITRE - 4": 71
  },
  {
    "fecha": "2026-06-13",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 39,
    "MITRE - 3": 46,
    "MITRE - 4": 71
  },
  {
    "fecha": "2026-06-13",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 42,
    "MITRE - 3": 50,
    "MITRE - 4": 74
  },
  {
    "fecha": "2026-06-13",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 41,
    "MITRE - 3": 50,
    "MITRE - 4": 74
  },
  {
    "fecha": "2026-06-13",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 40,
    "MITRE - 3": 51,
    "MITRE - 4": 74
  },
  {
    "fecha": "2026-06-13",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 38,
    "MITRE - 3": 51,
    "MITRE - 4": 75
  },
  {
    "fecha": "2026-06-13",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 30,
    "MITRE - 3": 49,
    "MITRE - 4": 75
  },
  {
    "fecha": "2026-06-13",
    "franja": "14:30 - 15:00",
    "TELETRABAJO": 29,
    "MITRE - 3": 47,
    "MITRE - 4": 75
  },
  {
    "fecha": "2026-06-14",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 52,
    "TELETRABAJO": 22,
    "MITRE - 4": 58
  },
  {
    "fecha": "2026-06-14",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 52,
    "TELETRABAJO": 22,
    "MITRE - 4": 58
  },
  {
    "fecha": "2026-06-14",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 51,
    "TELETRABAJO": 22,
    "MITRE - 4": 58
  },
  {
    "fecha": "2026-06-14",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 51,
    "TELETRABAJO": 22,
    "MITRE - 4": 59
  },
  {
    "fecha": "2026-06-14",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 56,
    "TELETRABAJO": 31,
    "MITRE - 4": 68
  },
  {
    "fecha": "2026-06-14",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 55,
    "TELETRABAJO": 31,
    "MITRE - 4": 61
  },
  {
    "fecha": "2026-06-14",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 54,
    "TELETRABAJO": 31,
    "MITRE - 4": 62
  },
  {
    "fecha": "2026-06-14",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 54,
    "TELETRABAJO": 31,
    "MITRE - 4": 65
  },
  {
    "fecha": "2026-06-14",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 50,
    "TELETRABAJO": 33,
    "MITRE - 4": 66
  },
  {
    "fecha": "2026-06-14",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 49,
    "TELETRABAJO": 33,
    "MITRE - 4": 68
  },
  {
    "fecha": "2026-06-14",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 29,
    "TELETRABAJO": 24,
    "MITRE - 4": 31
  },
  {
    "fecha": "2026-06-14",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 28,
    "MITRE - 4": 23,
    "TELETRABAJO": 21
  },
  {
    "fecha": "2026-06-14",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 20,
    "TELETRABAJO": 17,
    "MITRE - 4": 18
  },
  {
    "fecha": "2026-06-14",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 3,
    "MITRE - 3": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 10,
    "MITRE - 3": 10,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-14",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 12,
    "MITRE - 3": 11,
    "MITRE - 4": 5
  },
  {
    "fecha": "2026-06-14",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 28,
    "MITRE - 3": 34,
    "MITRE - 4": 38
  },
  {
    "fecha": "2026-06-14",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 29,
    "MITRE - 3": 36,
    "MITRE - 4": 43
  },
  {
    "fecha": "2026-06-14",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 28,
    "MITRE - 3": 38,
    "MITRE - 4": 44
  },
  {
    "fecha": "2026-06-14",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 28,
    "MITRE - 3": 38,
    "MITRE - 4": 44
  },
  {
    "fecha": "2026-06-14",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 28,
    "MITRE - 3": 39,
    "MITRE - 4": 45
  },
  {
    "fecha": "2026-06-14",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 28,
    "MITRE - 3": 40,
    "MITRE - 4": 45
  },
  {
    "fecha": "2026-06-14",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 29,
    "MITRE - 3": 45,
    "MITRE - 4": 48
  },
  {
    "fecha": "2026-06-14",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 29,
    "MITRE - 3": 45,
    "MITRE - 4": 47
  },
  {
    "fecha": "2026-06-14",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 29,
    "MITRE - 3": 46,
    "MITRE - 4": 47
  },
  {
    "fecha": "2026-06-14",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 30,
    "MITRE - 3": 46,
    "MITRE - 4": 46
  },
  {
    "fecha": "2026-06-14",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 25,
    "MITRE - 3": 43,
    "MITRE - 4": 44
  },
  {
    "fecha": "2026-06-14",
    "franja": "14:30 - 15:00",
    "MITRE - 3": 44,
    "TELETRABAJO": 24,
    "MITRE - 4": 45
  },
  {
    "fecha": "2026-06-14",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 45,
    "TELETRABAJO": 19,
    "MITRE - 4": 60
  },
  {
    "fecha": "2026-06-14",
    "franja": "15:30 - 16:00",
    "TELETRABAJO": 19,
    "MITRE - 3": 43,
    "MITRE - 4": 59
  },
  {
    "fecha": "2026-06-12",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 34,
    "MITRE - 4": 13,
    "MITRE - 3": 28
  },
  {
    "fecha": "2026-06-12",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 32,
    "MITRE - 4": 12,
    "MITRE - 3": 29
  },
  {
    "fecha": "2026-06-12",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 31,
    "MITRE - 4": 12,
    "MITRE - 3": 29
  },
  {
    "fecha": "2026-06-13",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 9,
    "MITRE - 4": 2,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-13",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 20,
    "MITRE - 4": 21,
    "MITRE - 3": 19
  },
  {
    "fecha": "2026-06-13",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 19,
    "MITRE - 4": 19,
    "MITRE - 3": 20
  },
  {
    "fecha": "2026-06-13",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 18,
    "MITRE - 4": 19,
    "MITRE - 3": 19
  },
  {
    "fecha": "2026-06-14",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 8,
    "MITRE - 4": 2,
    "MITRE - 3": 5
  },
  {
    "fecha": "2026-06-14",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 17,
    "MITRE - 4": 17,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-14",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 17,
    "MITRE - 4": 17,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-14",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 17,
    "MITRE - 4": 17,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-15",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 2,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-12",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 11,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-12",
    "franja": "06:00 - 06:30",
    "MITRE - 4": 0,
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-13",
    "franja": "07:00 - 07:30",
    "MITRE - 3": 2,
    "TELETRABAJO": 5
  },
  {
    "fecha": "2026-06-13",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 4,
    "MITRE - 3": 0
  },
  {
    "fecha": "2026-06-13",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-14",
    "franja": "06:00 - 06:30",
    "MITRE - 3": 1,
    "TELETRABAJO": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "06:30 - 07:00",
    "MITRE - 3": 1,
    "TELETRABAJO": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "07:00 - 07:30",
    "MITRE - 3": 3,
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-13",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-13",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-13",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-13",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 5,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "00:30 - 01:00",
    "MITRE - 3": 3,
    "TELETRABAJO": 7,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-14",
    "franja": "01:00 - 01:30",
    "MITRE - 3": 3,
    "TELETRABAJO": 7,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-14",
    "franja": "01:30 - 02:00",
    "MITRE - 3": 3,
    "TELETRABAJO": 7,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-14",
    "franja": "02:00 - 02:30",
    "MITRE - 3": 0,
    "TELETRABAJO": 5,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-15",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 6,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 6,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 6,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 4,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 56,
    "TELETRABAJO": 42,
    "MITRE - 4": 63
  },
  {
    "fecha": "2026-06-15",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 56,
    "TELETRABAJO": 41,
    "MITRE - 4": 62
  },
  {
    "fecha": "2026-06-15",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 56,
    "TELETRABAJO": 41,
    "MITRE - 4": 60
  },
  {
    "fecha": "2026-06-15",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 57,
    "TELETRABAJO": 40,
    "MITRE - 4": 59
  },
  {
    "fecha": "2026-06-15",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 63,
    "TELETRABAJO": 47,
    "MITRE - 4": 65
  },
  {
    "fecha": "2026-06-15",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 63,
    "TELETRABAJO": 46,
    "MITRE - 4": 62
  },
  {
    "fecha": "2026-06-15",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 63,
    "TELETRABAJO": 45,
    "MITRE - 4": 59
  },
  {
    "fecha": "2026-06-15",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 63,
    "TELETRABAJO": 45,
    "MITRE - 4": 58
  },
  {
    "fecha": "2026-06-15",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 60,
    "TELETRABAJO": 44,
    "MITRE - 4": 56
  },
  {
    "fecha": "2026-06-15",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 59,
    "TELETRABAJO": 44,
    "MITRE - 4": 55
  },
  {
    "fecha": "2026-06-15",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 31,
    "TELETRABAJO": 28,
    "MITRE - 4": 19
  },
  {
    "fecha": "2026-06-15",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 29,
    "TELETRABAJO": 26,
    "MITRE - 4": 14
  },
  {
    "fecha": "2026-06-15",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 20,
    "TELETRABAJO": 22,
    "MITRE - 4": 9
  },
  {
    "fecha": "2026-06-15",
    "franja": "07:30 - 08:00",
    "TELETRABAJO": 8,
    "MITRE - 4": 0,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 19,
    "MITRE - 4": 6,
    "MITRE - 3": 7
  },
  {
    "fecha": "2026-06-15",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 21,
    "MITRE - 4": 7,
    "MITRE - 3": 7
  },
  {
    "fecha": "2026-06-15",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 44,
    "MITRE - 3": 35,
    "MITRE - 4": 53
  },
  {
    "fecha": "2026-06-15",
    "franja": "09:30 - 10:00",
    "TELETRABAJO": 48,
    "MITRE - 3": 37,
    "MITRE - 4": 58
  },
  {
    "fecha": "2026-06-15",
    "franja": "10:00 - 10:30",
    "TELETRABAJO": 51,
    "MITRE - 3": 40,
    "MITRE - 4": 60
  },
  {
    "fecha": "2026-06-15",
    "franja": "10:30 - 11:00",
    "TELETRABAJO": 51,
    "MITRE - 3": 41,
    "MITRE - 4": 60
  },
  {
    "fecha": "2026-06-15",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 51,
    "MITRE - 3": 41,
    "MITRE - 4": 62
  },
  {
    "fecha": "2026-06-15",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 51,
    "MITRE - 3": 40,
    "MITRE - 4": 62
  },
  {
    "fecha": "2026-06-15",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 56,
    "MITRE - 3": 46,
    "MITRE - 4": 64
  },
  {
    "fecha": "2026-06-15",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 55,
    "MITRE - 3": 46,
    "MITRE - 4": 64
  },
  {
    "fecha": "2026-06-15",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 55,
    "MITRE - 3": 47,
    "MITRE - 4": 64
  },
  {
    "fecha": "2026-06-15",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 55,
    "MITRE - 3": 47,
    "MITRE - 4": 64
  },
  {
    "fecha": "2026-06-15",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 46,
    "MITRE - 3": 44,
    "MITRE - 4": 66
  },
  {
    "fecha": "2026-06-15",
    "franja": "15:00 - 15:30",
    "TELETRABAJO": 45,
    "MITRE - 3": 47,
    "MITRE - 4": 61
  },
  {
    "fecha": "2026-06-15",
    "franja": "15:30 - 16:00",
    "TELETRABAJO": 39,
    "MITRE - 3": 47,
    "MITRE - 4": 60
  },
  {
    "fecha": "2026-06-15",
    "franja": "14:30 - 15:00",
    "TELETRABAJO": 43,
    "MITRE - 3": 45,
    "MITRE - 4": 66
  },
  {
    "fecha": "2026-06-15",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 22,
    "MITRE - 4": 8,
    "MITRE - 3": 19
  },
  {
    "fecha": "2026-06-15",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 20,
    "MITRE - 4": 7,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-15",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 19,
    "MITRE - 4": 7,
    "MITRE - 3": 18
  },
  {
    "fecha": "2026-06-16",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 1,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-15",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-15",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 8,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-16",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 4,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-16",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 4,
    "MITRE - 3": 0
  },
  {
    "fecha": "2026-06-16",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-16",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-12",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-12",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-12",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-12",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-12",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-13",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-13",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 2,
    "MITRE - 4": 0
  },
  {
    "fecha": "2026-06-13",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-13",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-13",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-13",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-13",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-14",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 5,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-14",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-14",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 1,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "02:30 - 03:00",
    "MITRE - 4": 1,
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-15",
    "franja": "03:00 - 03:30",
    "MITRE - 4": 0,
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 1
  },
  {
    "fecha": "2026-06-15",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-15",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-15",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-15",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 2
  },
  {
    "fecha": "2026-06-16",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-16",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-16",
    "franja": "07:30 - 08:00",
    "MITRE - 4": 0,
    "MITRE - 3": 0,
    "TELETRABAJO": 15
  },
  {
    "fecha": "2026-06-16",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 104,
    "TELETRABAJO": 136,
    "MITRE - 3": 110
  },
  {
    "fecha": "2026-06-16",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 105,
    "TELETRABAJO": 139,
    "MITRE - 3": 109
  },
  {
    "fecha": "2026-06-16",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 106,
    "TELETRABAJO": 139,
    "MITRE - 3": 110
  },
  {
    "fecha": "2026-06-16",
    "franja": "11:00 - 11:30",
    "TELETRABAJO": 141,
    "MITRE - 4": 107,
    "MITRE - 3": 111
  },
  {
    "fecha": "2026-06-16",
    "franja": "11:30 - 12:00",
    "TELETRABAJO": 139,
    "MITRE - 4": 107,
    "MITRE - 3": 112
  },
  {
    "fecha": "2026-06-16",
    "franja": "12:00 - 12:30",
    "TELETRABAJO": 142,
    "MITRE - 4": 113,
    "MITRE - 3": 131
  },
  {
    "fecha": "2026-06-16",
    "franja": "08:00 - 08:30",
    "TELETRABAJO": 55,
    "MITRE - 4": 13,
    "MITRE - 3": 27
  },
  {
    "fecha": "2026-06-16",
    "franja": "08:30 - 09:00",
    "TELETRABAJO": 65,
    "MITRE - 4": 20,
    "MITRE - 3": 36
  },
  {
    "fecha": "2026-06-16",
    "franja": "09:00 - 09:30",
    "TELETRABAJO": 133,
    "MITRE - 4": 91,
    "MITRE - 3": 106
  },
  {
    "fecha": "2026-06-16",
    "franja": "12:30 - 13:00",
    "TELETRABAJO": 141,
    "MITRE - 4": 115,
    "MITRE - 3": 133
  },
  {
    "fecha": "2026-06-16",
    "franja": "13:00 - 13:30",
    "TELETRABAJO": 138,
    "MITRE - 4": 119,
    "MITRE - 3": 135
  },
  {
    "fecha": "2026-06-16",
    "franja": "13:30 - 14:00",
    "TELETRABAJO": 137,
    "MITRE - 4": 119,
    "MITRE - 3": 133
  },
  {
    "fecha": "2026-06-16",
    "franja": "14:00 - 14:30",
    "TELETRABAJO": 115,
    "MITRE - 4": 119,
    "MITRE - 3": 120
  },
  {
    "fecha": "2026-06-16",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 107,
    "MITRE - 3": 121
  },
  {
    "fecha": "2026-06-16",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 107,
    "TELETRABAJO": 102,
    "MITRE - 3": 128
  },
  {
    "fecha": "2026-06-16",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 113,
    "TELETRABAJO": 97,
    "MITRE - 3": 131
  },
  {
    "fecha": "2026-06-16",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 117,
    "TELETRABAJO": 113,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 113,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 116,
    "TELETRABAJO": 112,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 113,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 122,
    "TELETRABAJO": 125,
    "MITRE - 3": 152
  },
  {
    "fecha": "2026-06-16",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 116,
    "TELETRABAJO": 127,
    "MITRE - 3": 148
  },
  {
    "fecha": "2026-06-16",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 108,
    "TELETRABAJO": 127,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 112,
    "TELETRABAJO": 127,
    "MITRE - 3": 144
  },
  {
    "fecha": "2026-06-16",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 108,
    "TELETRABAJO": 119,
    "MITRE - 3": 131
  },
  {
    "fecha": "2026-06-16",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 105,
    "TELETRABAJO": 118,
    "MITRE - 3": 129
  },
  {
    "fecha": "2026-06-16",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 33,
    "TELETRABAJO": 68,
    "MITRE - 3": 61
  },
  {
    "fecha": "2026-06-16",
    "franja": "21:30 - 22:00",
    "MITRE - 4": 18,
    "TELETRABAJO": 58,
    "MITRE - 3": 49
  },
  {
    "fecha": "2026-06-16",
    "franja": "22:00 - 22:30",
    "MITRE - 4": 13,
    "TELETRABAJO": 37,
    "MITRE - 3": 28
  },
  {
    "fecha": "2026-06-16",
    "franja": "22:30 - 23:00",
    "MITRE - 4": 9,
    "TELETRABAJO": 34,
    "MITRE - 3": 26
  },
  {
    "fecha": "2026-06-16",
    "franja": "23:00 - 23:30",
    "MITRE - 4": 7,
    "TELETRABAJO": 30,
    "MITRE - 3": 25
  },
  {
    "fecha": "2026-06-16",
    "franja": "23:30 - 00:00",
    "MITRE - 4": 7,
    "TELETRABAJO": 28,
    "MITRE - 3": 23
  },
  {
    "fecha": "2026-06-17",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 11,
    "MITRE - 4": 0,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-16",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 15
  },
  {
    "fecha": "2026-06-16",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-16",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 10
  },
  {
    "fecha": "2026-06-17",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 9
  },
  {
    "fecha": "2026-06-17",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 9
  },
  {
    "fecha": "2026-06-17",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 9
  },
  {
    "fecha": "2026-06-17",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-16",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-16",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-16",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-16",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-16",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-17",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "15:30 - 16:00",
    "MITRE - 3": 139,
    "TELETRABAJO": 92,
    "MITRE - 4": 83
  },
  {
    "fecha": "2026-06-17",
    "franja": "16:00 - 16:30",
    "MITRE - 3": 158,
    "TELETRABAJO": 108,
    "MITRE - 4": 85
  },
  {
    "fecha": "2026-06-17",
    "franja": "16:30 - 17:00",
    "MITRE - 3": 158,
    "TELETRABAJO": 106,
    "MITRE - 4": 86
  },
  {
    "fecha": "2026-06-17",
    "franja": "17:00 - 17:30",
    "MITRE - 3": 156,
    "TELETRABAJO": 105,
    "MITRE - 4": 86
  },
  {
    "fecha": "2026-06-17",
    "franja": "17:30 - 18:00",
    "MITRE - 3": 156,
    "TELETRABAJO": 104,
    "MITRE - 4": 86
  },
  {
    "fecha": "2026-06-17",
    "franja": "18:00 - 18:30",
    "MITRE - 3": 161,
    "TELETRABAJO": 115,
    "MITRE - 4": 89
  },
  {
    "fecha": "2026-06-17",
    "franja": "18:30 - 19:00",
    "MITRE - 3": 159,
    "TELETRABAJO": 116,
    "MITRE - 4": 90
  },
  {
    "fecha": "2026-06-17",
    "franja": "19:00 - 19:30",
    "MITRE - 3": 157,
    "TELETRABAJO": 113,
    "MITRE - 4": 89
  },
  {
    "fecha": "2026-06-17",
    "franja": "19:30 - 20:00",
    "MITRE - 3": 157,
    "TELETRABAJO": 111,
    "MITRE - 4": 89
  },
  {
    "fecha": "2026-06-17",
    "franja": "20:00 - 20:30",
    "MITRE - 3": 149,
    "TELETRABAJO": 105,
    "MITRE - 4": 88
  },
  {
    "fecha": "2026-06-17",
    "franja": "20:30 - 21:00",
    "MITRE - 3": 147,
    "TELETRABAJO": 106,
    "MITRE - 4": 87
  },
  {
    "fecha": "2026-06-17",
    "franja": "21:00 - 21:30",
    "MITRE - 3": 68,
    "TELETRABAJO": 65,
    "MITRE - 4": 35
  },
  {
    "fecha": "2026-06-17",
    "franja": "21:30 - 22:00",
    "MITRE - 3": 56,
    "TELETRABAJO": 52,
    "MITRE - 4": 23
  },
  {
    "fecha": "2026-06-17",
    "franja": "22:00 - 22:30",
    "MITRE - 3": 36,
    "TELETRABAJO": 34,
    "MITRE - 4": 19
  },
  {
    "fecha": "2026-06-17",
    "franja": "08:00 - 08:30",
    "MITRE - 3": 31,
    "TELETRABAJO": 51,
    "MITRE - 4": 14
  },
  {
    "fecha": "2026-06-17",
    "franja": "08:30 - 09:00",
    "MITRE - 3": 38,
    "TELETRABAJO": 59,
    "MITRE - 4": 17
  },
  {
    "fecha": "2026-06-17",
    "franja": "09:00 - 09:30",
    "MITRE - 3": 110,
    "TELETRABAJO": 121,
    "MITRE - 4": 83
  },
  {
    "fecha": "2026-06-17",
    "franja": "09:30 - 10:00",
    "MITRE - 3": 116,
    "TELETRABAJO": 124,
    "MITRE - 4": 90
  },
  {
    "fecha": "2026-06-17",
    "franja": "10:00 - 10:30",
    "MITRE - 3": 116,
    "TELETRABAJO": 129,
    "MITRE - 4": 91
  },
  {
    "fecha": "2026-06-17",
    "franja": "10:30 - 11:00",
    "MITRE - 3": 117,
    "TELETRABAJO": 130,
    "MITRE - 4": 91
  },
  {
    "fecha": "2026-06-17",
    "franja": "11:00 - 11:30",
    "MITRE - 3": 117,
    "TELETRABAJO": 132,
    "MITRE - 4": 90
  },
  {
    "fecha": "2026-06-17",
    "franja": "11:30 - 12:00",
    "MITRE - 3": 115,
    "TELETRABAJO": 132,
    "MITRE - 4": 90
  },
  {
    "fecha": "2026-06-17",
    "franja": "12:00 - 12:30",
    "MITRE - 3": 136,
    "TELETRABAJO": 135,
    "MITRE - 4": 93
  },
  {
    "fecha": "2026-06-17",
    "franja": "12:30 - 13:00",
    "MITRE - 3": 137,
    "TELETRABAJO": 133,
    "MITRE - 4": 93
  },
  {
    "fecha": "2026-06-17",
    "franja": "13:00 - 13:30",
    "MITRE - 3": 141,
    "TELETRABAJO": 129,
    "MITRE - 4": 96
  },
  {
    "fecha": "2026-06-17",
    "franja": "13:30 - 14:00",
    "MITRE - 3": 141,
    "TELETRABAJO": 127,
    "MITRE - 4": 96
  },
  {
    "fecha": "2026-06-17",
    "franja": "14:00 - 14:30",
    "MITRE - 3": 127,
    "TELETRABAJO": 107,
    "MITRE - 4": 90
  },
  {
    "fecha": "2026-06-17",
    "franja": "15:00 - 15:30",
    "MITRE - 3": 139,
    "TELETRABAJO": 99,
    "MITRE - 4": 78
  },
  {
    "fecha": "2026-06-17",
    "franja": "07:30 - 08:00",
    "MITRE - 3": 2,
    "TELETRABAJO": 16,
    "MITRE - 4": 2
  },
  {
    "fecha": "2026-06-17",
    "franja": "14:30 - 15:00",
    "MITRE - 3": 125,
    "TELETRABAJO": 98,
    "MITRE - 4": 88
  },
  {
    "fecha": "2026-06-17",
    "franja": "22:30 - 23:00",
    "TELETRABAJO": 33,
    "MITRE - 4": 18,
    "MITRE - 3": 35
  },
  {
    "fecha": "2026-06-17",
    "franja": "23:00 - 23:30",
    "TELETRABAJO": 33,
    "MITRE - 4": 17,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-17",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 30,
    "MITRE - 4": 17,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-18",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 10,
    "MITRE - 4": 2,
    "MITRE - 3": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 11,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-17",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 14,
    "MITRE - 4": 2,
    "MITRE - 3": 2
  },
  {
    "fecha": "2026-06-17",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6
  },
  {
    "fecha": "2026-06-18",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 9,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 9,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 9,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 6,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-17",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-17",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 4
  },
  {
    "fecha": "2026-06-18",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 6,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 3,
    "MITRE - 4": 0
  },
  {
    "fecha": "2026-06-18",
    "franja": "14:30 - 15:00",
    "MITRE - 4": 111,
    "TELETRABAJO": 107,
    "MITRE - 3": 117
  },
  {
    "fecha": "2026-06-18",
    "franja": "15:00 - 15:30",
    "MITRE - 4": 113,
    "TELETRABAJO": 101,
    "MITRE - 3": 138
  },
  {
    "fecha": "2026-06-18",
    "franja": "15:30 - 16:00",
    "MITRE - 4": 122,
    "TELETRABAJO": 95,
    "MITRE - 3": 139
  },
  {
    "fecha": "2026-06-18",
    "franja": "16:00 - 16:30",
    "MITRE - 4": 124,
    "TELETRABAJO": 109,
    "MITRE - 3": 147
  },
  {
    "fecha": "2026-06-18",
    "franja": "16:30 - 17:00",
    "MITRE - 4": 124,
    "TELETRABAJO": 110,
    "MITRE - 3": 149
  },
  {
    "fecha": "2026-06-18",
    "franja": "17:00 - 17:30",
    "MITRE - 4": 120,
    "TELETRABAJO": 107,
    "MITRE - 3": 145
  },
  {
    "fecha": "2026-06-18",
    "franja": "17:30 - 18:00",
    "MITRE - 4": 118,
    "TELETRABAJO": 107,
    "MITRE - 3": 146
  },
  {
    "fecha": "2026-06-18",
    "franja": "18:00 - 18:30",
    "MITRE - 4": 123,
    "TELETRABAJO": 119,
    "MITRE - 3": 157
  },
  {
    "fecha": "2026-06-18",
    "franja": "18:30 - 19:00",
    "MITRE - 4": 120,
    "TELETRABAJO": 119,
    "MITRE - 3": 156
  },
  {
    "fecha": "2026-06-18",
    "franja": "19:30 - 20:00",
    "MITRE - 4": 117,
    "TELETRABAJO": 116,
    "MITRE - 3": 152
  },
  {
    "fecha": "2026-06-18",
    "franja": "20:00 - 20:30",
    "MITRE - 4": 111,
    "TELETRABAJO": 107,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-18",
    "franja": "20:30 - 21:00",
    "MITRE - 4": 107,
    "TELETRABAJO": 107,
    "MITRE - 3": 143
  },
  {
    "fecha": "2026-06-18",
    "franja": "21:00 - 21:30",
    "MITRE - 4": 37,
    "TELETRABAJO": 60,
    "MITRE - 3": 68
  },
  {
    "fecha": "2026-06-18",
    "franja": "12:30 - 13:00",
    "MITRE - 4": 111,
    "TELETRABAJO": 133,
    "MITRE - 3": 129
  },
  {
    "fecha": "2026-06-18",
    "franja": "13:00 - 13:30",
    "MITRE - 4": 114,
    "TELETRABAJO": 134,
    "MITRE - 3": 132
  },
  {
    "fecha": "2026-06-18",
    "franja": "13:30 - 14:00",
    "MITRE - 4": 114,
    "TELETRABAJO": 133,
    "MITRE - 3": 131
  },
  {
    "fecha": "2026-06-18",
    "franja": "14:00 - 14:30",
    "MITRE - 4": 109,
    "TELETRABAJO": 113,
    "MITRE - 3": 123
  },
  {
    "fecha": "2026-06-18",
    "franja": "19:00 - 19:30",
    "MITRE - 4": 112,
    "TELETRABAJO": 117,
    "MITRE - 3": 153
  },
  {
    "fecha": "2026-06-18",
    "franja": "08:30 - 09:00",
    "MITRE - 4": 23,
    "MITRE - 3": 32,
    "TELETRABAJO": 59
  },
  {
    "fecha": "2026-06-18",
    "franja": "09:00 - 09:30",
    "MITRE - 4": 87,
    "TELETRABAJO": 122,
    "MITRE - 3": 97
  },
  {
    "fecha": "2026-06-18",
    "franja": "09:30 - 10:00",
    "MITRE - 4": 95,
    "TELETRABAJO": 127,
    "MITRE - 3": 104
  },
  {
    "fecha": "2026-06-18",
    "franja": "10:00 - 10:30",
    "MITRE - 4": 101,
    "TELETRABAJO": 130,
    "MITRE - 3": 108
  },
  {
    "fecha": "2026-06-18",
    "franja": "10:30 - 11:00",
    "MITRE - 4": 103,
    "TELETRABAJO": 131,
    "MITRE - 3": 110
  },
  {
    "fecha": "2026-06-18",
    "franja": "11:00 - 11:30",
    "MITRE - 4": 107,
    "TELETRABAJO": 132,
    "MITRE - 3": 113
  },
  {
    "fecha": "2026-06-18",
    "franja": "11:30 - 12:00",
    "MITRE - 4": 108,
    "TELETRABAJO": 133,
    "MITRE - 3": 113
  },
  {
    "fecha": "2026-06-18",
    "franja": "12:00 - 12:30",
    "MITRE - 4": 109,
    "TELETRABAJO": 137,
    "MITRE - 3": 129
  },
  {
    "fecha": "2026-06-18",
    "franja": "07:30 - 08:00",
    "MITRE - 4": 2,
    "TELETRABAJO": 15,
    "MITRE - 3": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "08:00 - 08:30",
    "MITRE - 4": 16,
    "MITRE - 3": 25,
    "TELETRABAJO": 50
  },
  {
    "fecha": "2026-06-18",
    "franja": "21:30 - 22:00",
    "TELETRABAJO": 51,
    "MITRE - 4": 20,
    "MITRE - 3": 51
  },
  {
    "fecha": "2026-06-18",
    "franja": "22:00 - 22:30",
    "TELETRABAJO": 37,
    "MITRE - 4": 12,
    "MITRE - 3": 36
  },
  {
    "fecha": "2026-06-18",
    "franja": "22:30 - 23:00",
    "MITRE - 4": 11,
    "TELETRABAJO": 35,
    "MITRE - 3": 34
  },
  {
    "fecha": "2026-06-18",
    "franja": "23:00 - 23:30",
    "MITRE - 4": 9,
    "TELETRABAJO": 33,
    "MITRE - 3": 31
  },
  {
    "fecha": "2026-06-18",
    "franja": "23:30 - 00:00",
    "TELETRABAJO": 32,
    "MITRE - 4": 9,
    "MITRE - 3": 31
  },
  {
    "fecha": "2026-06-19",
    "franja": "00:00 - 00:30",
    "TELETRABAJO": 9,
    "MITRE - 4": 1,
    "MITRE - 3": 3
  },
  {
    "fecha": "2026-06-18",
    "franja": "06:00 - 06:30",
    "TELETRABAJO": 6,
    "MITRE - 4": 0
  },
  {
    "fecha": "2026-06-18",
    "franja": "06:30 - 07:00",
    "TELETRABAJO": 10,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "07:00 - 07:30",
    "TELETRABAJO": 13,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "05:30 - 06:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-19",
    "franja": "00:30 - 01:00",
    "TELETRABAJO": 8,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-19",
    "franja": "01:00 - 01:30",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-19",
    "franja": "01:30 - 02:00",
    "TELETRABAJO": 7,
    "MITRE - 3": 2,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-19",
    "franja": "02:00 - 02:30",
    "TELETRABAJO": 4,
    "MITRE - 3": 0,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-18",
    "franja": "03:30 - 04:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-18",
    "franja": "04:00 - 04:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-18",
    "franja": "04:30 - 05:00",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-18",
    "franja": "05:00 - 05:30",
    "TELETRABAJO": 3
  },
  {
    "fecha": "2026-06-19",
    "franja": "02:30 - 03:00",
    "TELETRABAJO": 4,
    "MITRE - 4": 1
  },
  {
    "fecha": "2026-06-19",
    "franja": "03:00 - 03:30",
    "TELETRABAJO": 1,
    "MITRE - 4": 0
  }
];







