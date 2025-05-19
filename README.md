# 🎵 Spotify Clone

A modern, responsive Spotify clone built with React, TypeScript, and Tailwind CSS.

![Spotify Clone Screenshot](https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg)

## ✨ Features

- 🎨 Modern, responsive UI that closely resembles Spotify
- 🎵 Music player with play, pause, skip, and volume controls
- 📱 Mobile-friendly design with collapsible sidebar
- 🎼 Dynamic playlists and track listings
- 👤 Artist and album cards
- 🎧 Progress bar with time display
- 🌙 Dark mode design

## 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotify-clone.git
```

2. Install dependencies:
```bash
cd spotify-clone
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Cards/         # Album, Artist, and Playlist cards
│   ├── Player/        # Music player components
│   ├── Sidebar/       # Navigation sidebar
│   └── TrackList/     # Track listing components
├── context/           # React context for state management
├── data/             # Mock data for development
├── layout/           # Layout components
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## 🎨 Component Features

### Music Player
- Play/pause functionality
- Next/previous track controls
- Volume control
- Progress bar with time display
- Currently playing track info

### Sidebar Navigation
- Responsive design
- Collapsible on mobile
- Dynamic playlist listing
- Navigation links

### Track Listing
- Song information display
- Play/pause individual tracks
- Duration display
- Hover effects

## 🔧 Configuration

The project uses Vite for development and building. Configuration can be modified in:
- `vite.config.ts`
- `tailwind.config.js`
- `tsconfig.json`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by Spotify
- Icons from Lucide React
- Images from Pexels
