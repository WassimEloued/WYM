package wym.rentcar.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import wym.rentcar.dto.AgencyRequest;
import wym.rentcar.dto.AgencyResponse;
import wym.rentcar.entity.User;
import wym.rentcar.service.AgencyService;

@RestController
@RequestMapping("/api/agencies")
@RequiredArgsConstructor
public class AgencyController {

    private final AgencyService agencyService;

    @PostMapping("/me")
    public ResponseEntity<AgencyResponse> createMyAgency(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody AgencyRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(agencyService.createAgency(user.getId(), request));
    }

    @PutMapping("/me")
    public ResponseEntity<AgencyResponse> updateMyAgency(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody AgencyRequest request) {
        return ResponseEntity.ok(agencyService.updateAgency(user.getId(), request));
    }

    @GetMapping("/me")
    public ResponseEntity<AgencyResponse> getMyAgency(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(agencyService.getByOwnerId(user.getId()));
    }

    @PostMapping(value = "/me/logo", consumes = "multipart/form-data")
    public ResponseEntity<AgencyResponse> updateLogo(
            @AuthenticationPrincipal User user,
            @RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(agencyService.updateLogo(user.getId(), file));
    }

    @GetMapping("/{agencyId}")
    public ResponseEntity<AgencyResponse> getAgency(@PathVariable Long agencyId) {
        return ResponseEntity.ok(agencyService.getById(agencyId));
    }
}
