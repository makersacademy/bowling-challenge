def reset_score
  allow(Space).to receive(:total) {0}
  Space.total
end