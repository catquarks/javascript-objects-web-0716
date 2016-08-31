var playlist = {
	bobo: "peanut song",
	mimi: "cashew song",
	baba: "cat song"
}

function updatePlaylist(playlist, artist, song){
	// playlist.artist = song does not work in functions?
	playlist[artist] = song
	return playlist
}

function removeFromPlaylist(playlist, artist){
	delete playlist[artist]
	return playlist
}