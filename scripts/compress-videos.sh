#!/usr/bin/env bash
# Compress videos for web delivery. Prefers HandBrakeCLI; falls back to ffmpeg.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MEDIA="$ROOT/public/media"

compress_one() {
  local input="$1"
  local output="$2"
  mkdir -p "$(dirname "$output")"

  if command -v HandBrakeCLI &>/dev/null; then
    echo "HandBrake: $input"
    HandBrakeCLI -i "$input" -o "$output" \
      -e x264 -q 22 -r 30 \
      --maxWidth 1280 --maxHeight 720 \
      -O -B 128
  elif command -v ffmpeg &>/dev/null; then
    echo "ffmpeg: $input"
    ffmpeg -y -i "$input" \
      -c:v libx264 -crf 28 -preset medium \
      -vf "scale='min(1280,iw)':-2" \
      -c:a aac -b:a 128k \
      -movflags +faststart \
      "$output"
  else
    echo "Install HandBrake or ffmpeg: brew install handbrake ffmpeg"
    exit 1
  fi
}

find "$MEDIA" -type f \( -iname '*.mp4' -o -iname '*.MP4' \) ! -path '*/optimized/*' | while read -r file; do
  rel="${file#$MEDIA/}"
  out="$MEDIA/optimized/$rel"
  if [[ ! -f "$out" ]]; then
    compress_one "$file" "$out"
  fi
done

echo "Done. Reference files under public/media/optimized/"
